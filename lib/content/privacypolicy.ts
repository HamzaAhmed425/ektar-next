export type LegalBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export const lastUpdated = "Last updated: 10th July 2024";

export const intro =
  "This Privacy Policy governs the manner in which Ektar.com and Ektar.ae collects, uses, maintains and discloses information collected from users (each, a “User”) of the Ektar.com website and microsites (“Site”). This privacy policy applies to the Site and all products and services offered by Ektar.com and Ektar.ae.";

export const body: LegalBlock[] = [
  { type: "h3", text: "1. What information do we collect?" },
  {
    type: "ul",
    items: [
      "Personal Information: We may collect personal information from Users in a variety of ways, including, but not limited to, when Users visit our Site, register on the Site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, mobile number and other such personal information as deemed required. Users may, however, visit our Site through their social logins such as Google account, iOS account or Facebook/Meta account etc or anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal information, except that it may prevent them from engaging in certain Site related activities.",
      "Non-personal information: We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users’ means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.",
    ],
  },

  { type: "h3", text: "2. What is this information used for?" },
  { type: "p", text: "Any of the information we collect from Users may be used in one of the following ways:" },
  {
    type: "ul",
    items: [
      "To improve our Site: We continually strive to improve our Site offerings based on the information and feedback we receive from Users.",
      "To improve customer service: Information from Users helps us to more effectively respond to your customer service requests and support needs.",
      "To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.",
      "To fulfil requests: We may use or disclose a User’s personal information to our businesses, our professional advisers, service providers, our technology and service partners, payment systems operators and financial institutions. By proceeding to [claim an offer on the Site] you will approve your explicit consent to such personal information being processed in accordance with the provisions of this Privacy Policy.",
      "To administer a contest, promotion, survey, or other Site feature. To send Users information they agreed to receive about topics we think will be of interest to them.",
      "To send periodic emails: We may use the email address to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product, or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email. In addition, if at any time you would like to unsubscribe from receiving future emails, simply email us at unsubscribe@ektar.com.",
    ],
  },

  { type: "h3", text: "3. Do we use cookies?" },
  {
    type: "p",
    text: "Yes, we do – Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. It enables the Sites or service provider’s systems to recognize your browser and capture and remember certain information. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.",
  },
  {
    type: "p",
    text: "We use cookies to understand and save User’s preferences for future visits, keep track of advertisements and compile aggregate data about Site traffic and Site interaction so that we can offer better Site experiences and tools in the future.",
  },

  { type: "h3", text: "4. How do we protect your information?" },
  {
    type: "p",
    text: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. We also implement a variety of security measures to maintain the safety of your personal information when you visit the Site or enter, submit, or access your personal information.",
  },
  {
    type: "p",
    text: "We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Database to be only accessed by those authorised with special access rights to our systems, and are required to keep the information confidential.",
  },
  { type: "p", text: "User’s personal information is retained by us for a period of Six years." },

  { type: "h3", text: "5. Do we disclose any information to outside parties?" },
  {
    type: "p",
    text: "Ektar.com takes user privacy seriously, we do not sell, trade, or rent Users’ personal identification information to others. Under most circumstances, we will refrain from releasing your personal information to unrelated third parties. Under these circumstances, these third parties are contractually agreed to keep this information confidential.",
  },
  {
    type: "p",
    text: "In addition, we may share generic aggregated demographic information not linked to any personal information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.",
  },

  { type: "h3", text: "6. Third party links" },
  {
    type: "p",
    text: "Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible or liable for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.",
  },
  { type: "p", text: "Nonetheless, we seek to protect the integrity of our Site and welcome any feedback about these sites." },
  {
    type: "p",
    text: "Because we value your privacy, we have taken the necessary precautions to be in compliance with the applicable privacy and data protection laws. We therefore will not distribute your personal information to outside parties without your consent.",
  },

  { type: "h3", text: "7. Advertising" },
  {
    type: "p",
    text: "Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.",
  },

  { type: "h3", text: "8. User Rights" },
  { type: "p", text: "Subject to applicable privacy and data protection laws, Users may have the right or choice to:" },
  {
    type: "ul",
    items: [
      "Opt-out of some collection or uses of Users’ personal information, including the use of cookies and similar technologies, the use of User’s personal information for marketing purposes, and the anonymization of User’s personal information for data analyses.",
      "Access User’s personal information, obtain a copy of it, rectify it, restrict, or object to its processing, or request its deletion, destruction, or anonymization.",
      "Receive the personal information User provided to us to transmit it to a third party.",
      "Withdraw any consent provided.",
      "Where applicable, lodge a complaint with your relevant data protection authority or regulator.",
    ],
  },
  {
    type: "p",
    text: "User, or a party authorized to act on User’s behalf, may exercise their rights by submitting a request as described in the “Contacting Us” section below.",
  },

  { type: "h3", text: "9. Online Privacy Policy Only" },
  { type: "p", text: "This online privacy policy applies only to information collected through our Site and not to information collected offline." },

  { type: "h3", text: "10. Terms of Use" },
  {
    type: "p",
    text: "Please also visit our Terms of Use section establishing the use, disclaimers, and limitations of liability governing the use of our Site at www.ektar.com/termsofuse.",
  },

  { type: "h3", text: "11. Changes to this privacy policy" },
  {
    type: "p",
    text: "Ektar.com and Ektar.ae has the discretion to update this Privacy Policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page and send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.",
  },
  { type: "p", text: "This policy was last modified on July 2024." },

  { type: "h3", text: "12. Your acceptance of these terms" },
  {
    type: "p",
    text: "By using this Site and/or creating an account on this Site, you signify your acceptance of this Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use our Site. Your continued use of the Site following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.",
  },

  { type: "h3", text: "13. Contacting Us" },
  {
    type: "p",
    text: "If there are any questions regarding this Privacy Policy, or for exercising any User Rights, you may contact us thru customer@ektar.com.",
  },
];
