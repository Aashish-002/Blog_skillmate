"use client"
import React from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import sanitize from "sanitize-html";
// import styles from './parsecontent.module.css'
import './parsecontent.css'

type ParseContentProps = { content?: string | null };

export const ParseContent: React.FC<ParseContentProps> = ({ content }) => (
    // <div>{content && parse(DOMPurify.sanitize(content))}</div>
    <div className={`content`}>{content && parse(sanitize(content))}</div>
);
