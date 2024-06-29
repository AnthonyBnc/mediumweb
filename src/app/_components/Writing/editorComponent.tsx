// src/components/RichTextEditor.tsx

import React, { useState, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  DraftEditorCommand,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { getDefaultKeyBinding } from "draft-js";

const RichTextEditor: React.FC<{
  onContentChange: (content: string) => void;
}> = ({ onContentChange }) => {
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty(),
  );
  const editorRef = useRef<Editor>(null);

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState,
  ): "handled" | "not-handled" => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));
    onContentChange(rawContent);
  };

  const mapKeyToEditorCommand = (
    e: React.KeyboardEvent<{}>,
  ): DraftEditorCommand | null => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlockType("header-one");
          }}
        >
          H1
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlockType("header-two");
          }}
        >
          H2
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleBlockType("blockquote");
          }}
        >
          Quote
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle("BOLD");
          }}
        >
          <b>B</b>
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle("ITALIC");
          }}
        >
          <i>I</i>
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleInlineStyle("UNDERLINE");
          }}
        >
          <u>U</u>
        </button>
      </div>
      <div className="editor" onClick={() => editorRef.current?.focus()}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={onChange}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
