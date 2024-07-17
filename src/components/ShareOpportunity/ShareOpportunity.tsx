"use client";

import React, { useState } from 'react';
import { FaClipboard, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const ShareOpportunity = ({ onClose, pageUrl }: { onClose: any, pageUrl: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    const message = encodeURIComponent("Check out this amazing opportunity on Skillmate Careers!");

    const handleBackgroundClick = (e: any) => {
        if (e.target.id === "shareo") {
            onClose();
        }
    };

    return (
        <div id="shareo" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleBackgroundClick}>
            <div className="relative w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg md:max-w-2xl">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
                    <FaTimes size={20} />
                </button>
                <div className="text-center">
                    <div className="absolute w-15 h-15 top-[-20px] left-[50%] transform -translate-x-1/2 mb-4 mt-8">
                        <Image width={250} height={250} src="/images/share-opportunity.svg" alt="Share opportunity" />
                    </div>
                    <h2 className="text-xl mb-4 mt-8">Thank you for sharing!</h2>
                    <p className="mb-4">We&apos;re glad you found our content valuable and want to share it with others. Your support helps us reach more people and provide valuable career guidance.</p>
                    <p className="mb-4 font-semibold">Share this blog post with your network:</p>
                    <div className="flex justify-center space-x-4 mb-4 flex-wrap">
                        <a href={`https://wa.me/?text=${message} ${pageUrl}`} target="_blank" rel="noopener noreferrer" className="text-green-600 text-3xl"><FaWhatsapp /></a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl"><FaFacebook /></a>
                        <a href={`https://www.instagram.com/?url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl"><FaInstagram /></a>
                        <a href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${message}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl"><FaTwitter /></a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl"><FaLinkedin /></a>
                    </div>
                    <p className="mb-4">Use the link below to share directly with friends, colleagues, or on your social media profiles:</p>
                    <div className="flex items-center justify-center mb-4">
                        <input type="text" readOnly value={pageUrl} className="border border-gray-300 rounded-l-lg p-2 flex-grow md:w-auto" />
                        <button className="bg-green-500 text-white py-2 rounded-r-lg flex items-center" onClick={handleCopyLink}>
                            {copied ? "Copied!" : 'Copy link '}
                            <FaClipboard className="ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareOpportunity;
