import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Seo = dynamic(() => import("@/components/Seo"));
const Layout = dynamic(() => import("@/components/Layout"));

const PrivacyPolicy = () => {
  const { t } = useTranslation("privacy-policy");

  return (
    <Layout>
      <>
        <Seo title={t("title")} description={t("description")} />
        <div className="!scroll-smooth">
          <main className={`leading-none overflow-x-hidden scroll-smooth`}>
            <Navbar bgHeader="!bg-primary" />
            <section className="bg-white mt-16 min-h-screen">
              <section className="container-size pt-[3rem] pb-[6rem] text-dark">
                <h1>Privacy Notice</h1><br>
                <p>Phetsiam PE Pipe Co., Ltd and its affiliates (as listed in the annex and hereinafter collectively referred to as "we") respect the rights to privacy of our customers (hereinafter referred to as "you"). To ensure that your personal data is protected, we have created this privacy notice to inform the details regarding the collection, use, disclosure, deletion, and destruction (collectively, the "processing ") of your personal data, both online and other channels, in accordance with the personal data protection law.</p>

                <h2>1. Why We Process Your Personal Data</h2>
                <p>1.1 We process your personal data because it is necessary for the performance of the contracts between you and us. We use your personal data in this regard to, for example, provide you with services and products, manage your account, make deliveries, proceed with accounting and financial matters, give after-sales services, process returns or refunds.</p>
                <p>1.2 We process your personal data because it is necessary for the purposes of the legitimate interests pursued by us or by a third party. Examples of what your personal data is processed in this regard are as follows:</p>
                <ul>
                  <li>To manage, develop, and conduct our business operations which include administration and development of websites and applications, fraud prevention and detection, crime prevention, relationship management for current and potential customers, maintenance of information technology (IT) systems;</li>
                  <li>To protect your security such as provision of security measures, protection of your personal data, access control and identity authentication when you log in to your user account;</li>
                  <li>To conduct marketing research and data analysis which includes sending news and privileges to you via emails, SMS, applications, social media, telephone, and direct mail, and to conduct questionnaires and interviews with you;</li>
                  <li>To establish, exercise, or defend your or our legal claims.</li>
                </ul>
                <p>1.3 We process your personal data because it is necessary in order to protect vital interests of you or of another person. We process your personal data to, for instance, make contact in case of emergency and control and prevent disease.</p>
                <p>1.4 We process your personal data because it is necessary for compliance with a legal obligation to which we are subject.</p>
                <p>1.5 We process your personal data because it is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in us.</p>
                <p>1.6 With your consent, we process your personal data to:</p>
                <ul>
                  <li>Enable us, the companies in our group, and our partners to send news and privileges to you via emails, SMS, applications, social media, telephone, and direct mail; and</li>
                  <li>Conduct other activities in which we might have to collect additional personal data about you in which case we will inform you and request your new consent from time to time. You can find out more about consent in item 4 of this privacy notice.</li>
                </ul>

                <h2>2. Personal Data We Collect</h2>
                <p>2.1 When you use our services, purchase our products, or become a member of our website, application; we collect the following personal data:</p>
                <ul>
                  <li>Personal information such as ID cards, ID number, title, name, date of birth, mobile number, email, marital status, conversation history, passport, Facebook account, LINE account, signature;</li>
                  <li>Contact information such as email address, telephone number, home address, office address, social media account;</li>
                  <li>Information related to your work such as occupation, position, work experience;</li>
                  <li>Information related to the purchase of products or services such as purchase history, claim history, complaints;</li>
                  <li>Personal data you have given to us when you contact us, request our after-sales services or participate in our research or interviews.</li>
                </ul>
                <p>2.2 When you visit our website or application or purchase our products or services online, we collect the following personal data:</p>
                <ul>
                  <li>Information about your registration such as name, email address, mobile number, passwords;</li>
                  <li>Information about electronic devices that you use, such as IP Address, location data, and another device identifier;</li>
                  <li>The type and version of the browser you use and the type and version of a plug-in;</li>
                  <li>Time Zone setting.</li>
                </ul>
                <p>2.3 When you contact us or participate in any activity with us, such as contacting the contact centre, taking part in a customer satisfaction survey, and participating in our loyalty activities; we collect the following personal data:</p>
                <ul>
                  <li>Personal information, such as name, date of birth, photograph, identification card number, passport number, airline membership numbers (e.g. Royal Orchid Plus), health information (food allergies);</li>
                  <li>Contact information such as name, last name, telephone number, email, address;</li>
                  <li>Information about your participation in our activities, such as previous history of activities, and photographs taken during your participation.</li>
                </ul>
                <p>2.4 We may need to collect and process special categories of personal data, as defined by personal data protection law, to fulfil the objectives we set out in this privacy notice such as</p>
                <ul>
                  <li>In some cases, we may collect your special categories of personal data even if the product or service you received is not directly associated with information such information. For instance, we do not intend to collect information about your religious belief but we obtain such information when we collect an image of your identification card; and</li>
                  <li>We might have to collect your health information, e.g. food allergies, when we organize a customer relationship activity for you.</li>
                </ul>
                <p>2.5 Where necessary, we will process your special categories personal data only when you give us explicit consent or for other purposes as required by law. We will ensure that we will try our best to provide adequate security measures to protect your special categories personal data.</p>

                <h2>3. Cookies and Other Similar Technologies</h2>
                <p>3.1 Strictly Necessary Cookies. This type of cookie is strictly necessary to make the website function properly and safely, allow you to use the website, enable you to log in, verify your identity etc. You cannot disable the use of this type of cookie via our website.</p>
                <p>3.2 Analytic Cookies. These cookies collect information about your use of the website to enable us to assess, evaluate, improve, and develop our content, products/services and websites in order to enhance your experience of using our website. If you do not allow us to use these cookies, we will not be able to measure, evaluate and develop websites.</p>
                <p>3.3 Functional Cookies. This type of cookie helps to remember the computer or electronic data you use to visit the website, your registration or log in information, settings or options you have previously selected on the website, such as the language displayed on the website and shipping address. You will be able to use the website more conveniently without needing to provide information or reset every time you use the website. If you do not allow us to use these cookies, you may not be able to use the website easily and not efficiently.</p>
                <p>3.4 Targeting Cookies. This type of cookie collects various information, which may include your personal data and create a profile about you so we can analyze and present products, services, and advertisements that best match your interests. If you do not allow us to use these cookies, you may receive general information and advertisements that are not relevant to your interests.</p>
                <p>3.5 Third-party Cookies. Our website uses cookies belonging to third parties. The usage and settings will be in accordance with the first 4 types of cookies. You will not be able to select the settings for the specific cookies of third parties. We are not able to control the use of that third party's data. You check the list of third parties and visit their websites to see their privacy notice and their cookies notice, which are different from ours.</p>

                <h2>4. Consent, Withdrawal and Consequences</h2>
                <p>4.1 You are entitled to withdraw your consent at any time but such withdrawal will not affect the validity of the processing made prior to the withdrawal of consent.</p>
                <p>4.2 Your withdrawal of consent or refusal to provide certain information may result in us being unable to fulfil some or all of the objectives stated in this privacy notice.</p>
                <p>4.3 If you are under 20 years of age, you shall, prior to giving the consent, inform us of your parent or guardian so that we shall also be able to ask for consent from them.</p>

                <h2>5. Retention Period</h2>
                <p>5.1 We will retain your personal data for the period necessary to meet the objectives unless the law requires longer

                  retention periods. In the event that such period is unclear, we will retain the data for a customary expected period in accordance with retention standards (e.g. the prescriptive period of 10 years for general legal claims).</p>
                <p>5.2 We have established an auditing system to delete or destroy your personal data when the retention period expires or when it becomes irrelevant or unnecessary for the purposes of collecting that personal data.</p>
                <p>5.3 If your personal data is processed based on consent, we will stop the processing when you have withdrawn the consent. However, we may keep your personal data to record your withdrawal so we can respond to your request in the future.</p>

                <h2>6. Disclosure of Your Personal Data</h2>
                <p>6.1 We disclose and share your personal data with:</p>
                <ul>
                  <li>Individuals and entities which are not our affiliates ("third parties") for the purpose of collecting and processing personal information as described in this privacy notice such as our dealers, transport and logistics service providers, postal service providers, tour operators, event organizers, data processing service providers, marketing service providers (who might send messages to you to promote our products and services), contractors (who might perform tasks on our behalf), financial service providers (such as banks, payment companies, electronic payment service providers, credit providers), IT service providers (such as providers of cloud services, blockchain systems, data analytics, SMS, or emails), IT developers, programmers, auditors, consultants, advisors, government agencies (e.g. the Revenue Department, the Anti-Money Laundering Office), insurers, legal advisors, third parties (in Thailand or anywhere else) that are related to subpoenas, court orders, or other legal processes or requirements under the laws or regulations of Thailand or laws and regulations of other jurisdictions that apply to us, our affiliates, or financial institutions to manage risks and to help detect and prevent illegal acts and fraud that may occur and other violations to our policies and agreements, and other persons who have to obtain your personal data to make us able to conduct business, provide products and services, and meet the purposes for the collection and processing of personal data as described in this privacy notice.</li>
                </ul>
                <p>6.2 In the event of a restructuring, sale, or transfer of our business or assets; we may disclose your personal data to a transferee or an acquirer and their advisor. However, we will use our best effort to protect your personal data which includes requiring the transferee or the acquirer and their advisor to comply with this privacy notice.</p>

                <h2>7. Transferring Personal Data Overseas</h2>
                <p>7.1 We may send or transfer your personal data to our affiliates or other persons in a foreign country if it is necessary in order for us to perform our obligations in the contract to which you are the counterparty or contract between us and third party for your benefit, to respond to your pre-contractual request; to protect your and third party’s life, body and health, to comply with laws or to the extent necessary for the public interest activities.</p>
                <p>7.2 We may store your information on a computer, server, or cloud provided by a third party. And may use third-party programs, applications and platforms in processing your personal data. However, we will not allow unrelated parties to access your personal data and will require such parties to have appropriate security protection measures.</p>
                <p>7.3 In the event that your personal data is transferred to a foreign country, we will comply with applicable personal data protection laws and take appropriate measures to ensure that your personal data is protected and you can exercise your rights in accordance with the laws. Moreover, we will require those who receive the data to have appropriate protection measures for your personal data, to process such personal data only as necessary, and to take steps to prevent unauthorized use or disclosure of your personal data.</p>

                <h2>8. Security Measures</h2>
                <p>8.1 We have implemented appropriate technical and administrative standards to protect your personal data from loss, misuse, and unauthorized access use, disclosure, or destruction. We use technology and security procedures such as encryption and access restriction to ensure that only authorized people shall have access to your personal data, and that they are trained about the importance of protecting personal data.</p>
                <p>8.2 We provide appropriate security measures to prevent the loss, access, use, change, or disclosure of personal data from those who do not have rights or duties related to that personal data. We will review the above-mentioned measures when necessary or when the technology changes to ensure effective security.</p>

                <h2>9. Your Rights as a Data Subject</h2>
                <p>9.1 You have the rights under the personal data protection law summarized as follows:</p>
                <ul>
                  <li>Withdraw the consent you have given to us;</li>
                  <li>Request to view and copy your personal data or disclose the source where we obtain your personal data;</li>
                  <li>Send or transfer personal data that is in an electronic form as required by personal data protection laws to other data controllers;</li>
                  <li>Oppose the collection, use, or disclosure of personal information about you;</li>
                  <li>Delete or destroy or make your personal data non-personally identifiable (anonymous) information;</li>
                  <li>Suspend the use of your personal data;</li>
                  <li>Correct your personal information to be current, complete, and not cause misunderstanding.</li>
                  <li>Complain to the Personal Data Protection Committee in the event that we, our data processors, our employees, or our contractors violate or do not comply with personal data protection laws.</li>
                </ul>
                <p>In this regard, we will consider your request, notify the result of the consideration, and execute it (if appropriate) within 30 days from the date we receive the request. Your rights mentioned above will be in accordance with the personal data protection law.</p>
                <p>9.2 You can exercise your legal rights by contacting our DPO at <a href="mailto:dpo.privacy@pspipe.co.th">dpo.privacy@pspipe.co.th</a></p>

                <h2>10. Information about our Data Protection Officer</h2>
                <p>10.1 In the event that you have a question regarding personal data protection, please send your message to <a href="mailto:dpo.privacy@pspipe.co.th">dpo.privacy@pspipe.co.th</a></p>

                <p>In the event that this privacy notice is amended, we will announce a new privacy notice on this website, which you should periodically review the privacy notice. The new privacy notice will be effective immediately on the date of announcement.</p>
              </section>
            </section>
            <Footer customStyle="!static" />
          </main>
        </div>
      </>
    </Layout>
  );
};

export default PrivacyPolicy;
