import { useEffect, useRef } from "react";
import type Quill from "quill";

type QuillTextEditorProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
};

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "code-block"],
];

export default function QuillTextEditor({ id, value, onChange }: QuillTextEditorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<Quill | null>(null);
  const valueRef = useRef(value);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    let cancelled = false;

    async function setupEditor() {
      const { default: QuillEditor } = await import("quill");

      if (cancelled || !containerRef.current || editorRef.current) {
        return;
      }

      const editor = new QuillEditor(containerRef.current, {
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: "Write the full post content...",
        theme: "snow",
      });

      editorRef.current = editor;
      editor.clipboard.dangerouslyPasteHTML(valueRef.current || "");
      editor.on("text-change", () => {
        onChangeRef.current(editor.root.innerHTML);
      });
    }

    setupEditor();

    return () => {
      cancelled = true;
      editorRef.current = null;
    };
  }, []);

  useEffect(() => {
    const editor = editorRef.current;

    if (!editor || value === editor.root.innerHTML) {
      return;
    }

    const selection = editor.getSelection();
    editor.clipboard.dangerouslyPasteHTML(value || "");

    if (selection) {
      const nextIndex = Math.min(selection.index, Math.max(editor.getLength() - 1, 0));
      const nextLength = Math.min(selection.length, editor.getLength() - nextIndex);

      editor.setSelection(nextIndex, nextLength);
    }
  }, [value]);

  return (
    <>
      <div className="quill-admin-editor" data-editor-id={id}>
        <div ref={containerRef} />
      </div>
      <style jsx global>{`
        .quill-admin-editor {
          overflow: hidden;
          border: 1px solid #d6dde3;
          border-radius: 8px;
          background: #fff;
          color: #262d30;
          font-family: "Inter Display", Inter, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }

        .quill-admin-editor:focus-within {
          border-color: #262d30;
          box-shadow: 0 0 0 2px rgba(38, 45, 48, 0.1);
        }

        .quill-admin-editor .ql-toolbar.ql-snow {
          border: 0;
          border-bottom: 1px solid #dde3e8;
          background: #f8fafb;
          font-family: "Inter Display", Inter, sans-serif;
          padding: 8px 4px;
        }

        .quill-admin-editor .ql-container.ql-snow {
          border: 0;
          font-family: "Inter Display", Inter, sans-serif;
          font-size: 16px;
        }

        .quill-admin-editor .ql-editor {
          min-height: 220px;
          padding: 12px;
          line-height: 24px;
        }

        .quill-admin-editor .ql-editor.ql-blank::before {
          color: #8a949b;
          font-style: normal;
          left: 12px;
          right: 12px;
        }
          .ql-toolbar.ql-snow .ql-formats {
            margin-right: 10px;
          }
      `}</style>
    </>
  );
}
