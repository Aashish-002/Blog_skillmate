// pages/terms.js
import React, { useState } from 'react';

interface ResultProps {
  onClose: () => void;
}

const TermsandConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
    <h1 className="text-3xl font-bold mb-4 text-center">
  
      Skillmate Career Campaign Terms and Conditions
    </h1>
    
    <h2 className="text-lg font-bold mb-2">1. Introduction</h2>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>The Skillmate Career Campaign (hereinafter referred to as &#x0022;the Campaign&#x0022;) is organized by Skillmate (hereinafter referred to as &#x0022;Skillmate&#x0022;).</li>
      <li>By participating in the Campaign, you agree to comply with and be bound by these terms and conditions.</li>
    </ul>

    <h2 className="text-lg font-bold mb-2">2. Eligibility</h2>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>The Campaign is open to all students who are currently enrolled in a recognized educational institution.</li>
      <li>Participants must be at least 16 years old or have parental/guardian consent if under 18.</li>
      <li>Skillmate reserves the right to verify the eligibility of participants.</li>
    </ul>

    <h2 className="text-lg font-bold mb-2">3. Campaign Duration</h2>
    <p className="text-gray-700 mb-4">
      The Campaign has no specific end date. Since we are encouraging more students to actively participate and enhance their career opportunities, Skillmate reserves the right to extend or shorten the campaign duration at its discretion.
    </p>

    <h2 className="text-lg font-bold mb-2">4. How to Participate</h2>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>Participants must create an account on Skillmate.ai and complete their profile.</li>
      <li>Participants are required to upload their resume and provide the necessary details, including their full name, the role they are applying for, and their reason for applying.</li>
      <li>All entries must be submitted through the Skillmate platform during the campaign period.</li>
    </ul>

    <h2 className="text-lg font-bold mb-2">5. Selection Process</h2>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>Resumes and profiles submitted during the Campaign will be reviewed and may be showcased on the Skillmate dashboard for potential employers to view.</li>
      <li>Selected entries may be given job placements or internships as a result of participating in the Campaign.</li>
    </ul>

    <h2 className="text-lg font-bold mb-2">6. Use of Personal Data</h2>
    <p className="text-gray-700 mb-4">
      By participating in the Campaign, you consent to the use of your personal data by Skillmate for the purposes of the Campaign and to facilitate connections with potential employers.
    </p>
    <p className="text-gray-700 mb-4">
      Skillmate will handle all personal data in accordance with its Privacy Policy.
    </p>

    <h2 className="text-lg font-bold mb-2">7. Content Guidelines</h2>
    <p className="text-gray-700 mb-4">
      Participants must ensure that all information provided is accurate, up-to-date, and does not infringe on any third-party rights.
    </p>
    <p className="text-gray-700 mb-4">
      Skillmate reserves the right to remove or disqualify any content that is deemed inappropriate, offensive, or in violation of these terms.
    </p>

    <h2 className="text-lg font-bold mb-2">8. Campaign Modifications</h2>
    <p className="text-gray-700 mb-4">
      Skillmate reserves the right to modify or terminate the Campaign at any time without prior notice.
    </p>
    <p className="text-gray-700 mb-4">
      Any changes to the Campaign or its terms will be posted on the Skillmate website.
    </p>

    <h2 className="text-lg font-bold mb-2">9. Liability</h2>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>Skillmate is not responsible for any technical issues, including network outages or data loss, that may affect the submission or receipt of entries.</li>
      <li>Skillmate is not liable for any direct or indirect damages resulting from participation in the Campaign.</li>
    </ul>

    <h2 className="text-lg font-bold mb-2">10. Intellectual Property</h2>
    <p className="text-gray-700 mb-4">
      All intellectual property rights associated with the Campaign, including the Skillmate platform and content, remain the property of Skillmate.
    </p>
    <p className="text-gray-700 mb-4">
      By participating, you grant Skillmate a non-exclusive, royalty-free license to use their submissions for promotional and marketing purposes related to the Campaign.
    </p>

    <h2 className="text-lg font-bold mb-2">11. Disputes</h2>
    <p className="text-gray-700 mb-4">
      Any disputes arising from or in connection with the Campaign shall be governed by the laws of [Country/State], without regard to its conflict of laws principles.
    </p>
    <p className="text-gray-700 mb-4">
      Participants agree to submit to the exclusive jurisdiction of the courts of Tamilnadu, India.
    </p>

    <h2 className="text-lg font-bold mb-2">12. Contact Information</h2>
    <p className="text-gray-700 mb-4">
      For any questions or inquiries regarding the Campaign, please contact Skillmate at <a href="mailto:career@skillmate.ai" className="text-blue-500">career@skillmate.ai</a>.
    </p>
    <p className="text-gray-700 mb-4">
      By participating in the Skillmate Career Campaign, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
    </p>
  </div>
);
  
};
export default TermsandConditions;
