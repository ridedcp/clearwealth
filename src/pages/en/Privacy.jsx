import SEO from "../../seo/SEO";

export default function PrivacyEN() {
  const path = "/en/privacy";
  const title = "Privacy Policy";
  const controllerName = "clearfinanciallife"; // Edit if you prefer
  const contactEmail = "contact@clearfinanciallife.com";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang="en" path={path} title={title} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Last updated: 4 November 2025</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        <h2>1. Data Controller</h2>
        <p>
          <strong>{controllerName}</strong> (“I”) is the data controller for personal data collected through this website.
          Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>2. Data I collect</h2>
        <ul>
          <li><strong>Identification & contact:</strong> name and email submitted via forms.</li>
          <li><strong>Usage & analytics:</strong> IP, browser/device identifiers, visited pages and timestamps.</li>
          <li><strong>Cookies</strong> and similar tech (see the <a href="/en/cookies">Cookies Policy</a>).</li>
        </ul>

        <h2>3. Purposes & legal bases (GDPR)</h2>
        <ul>
          <li><strong>Responding to enquiries</strong> (contact/form). Legal basis: consent or legitimate interest to reply.</li>
          <li><strong>Operating & improving the site</strong> (security, maintenance, aggregated metrics). Legal basis: legitimate interest.</li>
          <li><strong>Analytics</strong> (audience measurement). Legal basis: your consent for analytics cookies.</li>
          <li><strong>Communications</strong> (if you subscribe). Legal basis: consent; you can unsubscribe anytime.</li>
        </ul>

        <h2>4. Retention</h2>
        <p>I keep data as long as needed for the stated purposes or until you withdraw consent, plus any period required by law.</p>

        <h2>5. Recipients & processors</h2>
        <p>I may share data with service providers (hosting, email, analytics) acting as processors under appropriate contracts.</p>

        <h2>6. International transfers</h2>
        <p>If providers are outside the EEA, I ensure adequate protection via adequacy decisions or the European Commission’s SCCs.</p>

        <h2>7. Your rights</h2>
        <p>
          You may exercise access, rectification, erasure, objection, restriction and portability by emailing{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. You can withdraw consent at any time.
          If you believe your data has not been handled properly, you may lodge a complaint with the Spanish DPA (AEPD) at{" "}
          <a href="https://www.aepd.es">aepd.es</a>.
        </p>

        <h2>8. Security</h2>
        <p>I implement reasonable technical and organizational measures to protect data from unauthorized access, loss or alteration.</p>

        <h2>9. Children</h2>
        <p>This website is not directed to children under 14. If I become aware of children’s data without authorization, I will delete it.</p>

        <h2>10. Cookies</h2>
        <p>See the <a href="/en/cookies">Cookies Policy</a> for categories, purposes and settings.</p>

        <h2>11. Changes</h2>
        <p>I may update this policy to reflect legal or service changes. I will publish the current version on this page.</p>

        <h2>12. Contact</h2>
        <p>For privacy questions, contact me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      </div>
    </div>
  );
}
