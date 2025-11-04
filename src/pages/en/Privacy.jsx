import SEO from "../../seo/SEO";

export default function PrivacyEN() {
  const path = "/en/privacy";
  const title = "Privacy Policy";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang="en" path={path} title={title} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Last updated: 4 November 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        <h2>1. Data Controller</h2>
        <p>
          <strong>Clear Financial Life</strong> (<em>[Company ID]</em>), located at <em>[Full address]</em>, Spain
          (“we”), is the controller of personal data collected via this website. Contact:
          <a href="mailto:contact@clearfinanciallife.com"> contact@clearfinanciallife.com</a>.
        </p>

        <h2>2. Data we collect</h2>
        <ul>
          <li><strong>Identification & contact:</strong> name and email submitted through forms.</li>
          <li><strong>Usage & analytics:</strong> IP, browser/device identifiers, visited pages and timestamps.</li>
          <li><strong>Cookies</strong> and similar tech (see the <a href="/en/cookies">Cookies Policy</a>).</li>
        </ul>

        <h2>3. Purposes & legal bases (GDPR)</h2>
        <ul>
          <li><strong>Handling enquiries</strong> (contact/form). Legal basis: consent or our legitimate interest to reply.</li>
          <li><strong>Operating & improving the site</strong> (security, maintenance, aggregated metrics). Legal basis: legitimate interest.</li>
          <li><strong>Analytics</strong> (audience measurement). Legal basis: your consent for analytics cookies.</li>
          <li><strong>Communications</strong> (if you subscribe). Legal basis: consent; you can unsubscribe anytime.</li>
        </ul>

        <h2>4. Retention</h2>
        <p>
          We keep data as long as needed for the stated purposes or until you withdraw consent, plus any period required by law.
          Analytics retention depends on the tool configuration.
        </p>

        <h2>5. Recipients & processors</h2>
        <p>
          We share data with service providers (hosting, email, analytics) acting as processors under appropriate contracts.
        </p>

        <h2>6. International transfers</h2>
        <p>
          Where providers are outside the EEA, we ensure adequate protection via adequacy decisions or the European Commission’s SCCs.
        </p>

        <h2>7. Your rights</h2>
        <p>
          You may exercise access, rectification, erasure, objection, restriction and portability by emailing{" "}
          <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>. You can withdraw consent at any time.
          You may also lodge a complaint with your supervisory authority.
        </p>

        <h2>8. Security</h2>
        <p>We implement reasonable technical and organizational measures to protect data from unauthorized access, loss or alteration.</p>

        <h2>9. Children</h2>
        <p>This site is not directed to children under 14. We will delete unauthorized children’s data if we become aware of it.</p>

        <h2>10. Cookies</h2>
        <p>See the <a href="/en/cookies">Cookies Policy</a> for categories, purposes and settings.</p>

        <h2>11. Changes</h2>
        <p>We may update this policy for legal or service changes. We will publish the current version on this page.</p>

        <h2>12. Contact</h2>
        <p>Privacy questions: <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>.</p>
      </div>
    </div>
  );
}
