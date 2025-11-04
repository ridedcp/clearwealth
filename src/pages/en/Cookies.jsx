import SEO from "../../seo/SEO";

function openCookieManager() {
  if (window?.Cookiebot?.renew) return window.Cookiebot.renew();
  if (window?.cookieConsent?.open) return window.cookieConsent.open();
  alert("Open your site's cookie consent manager (CMP).");
}

export default function CookiesEN() {
  const path = "/en/cookies";
  const title = "Cookies Policy";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SEO lang="en" path={path} title={title} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        Last updated: 4 November 2025
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-h2:mt-10">
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small files stored on your device that, among other things, remember preferences
          and help us obtain usage statistics of the site.
        </p>

        <h2>2. Types of cookies we use</h2>
        <ul>
          <li><strong>Essential/technical:</strong> required for the site to function (e.g., security, session).</li>
          <li><strong>Preference/customization:</strong> remember settings such as language or region.</li>
          <li><strong>Analytics/measurement:</strong> help us understand usage (requires your consent).</li>
          <li><strong>Advertising/remarketing:</strong> provide relevant ads (requires your consent).</li>
        </ul>

        <h2>3. Legal basis</h2>
        <p>
          We set essential cookies under legitimate interest. Analytics and advertising cookies are set only with your consent.
        </p>

        <h2>4. Who uses this information?</h2>
        <p>
          We and, where applicable, our providers (e.g., analytics or advertising) as processors.
          If transfers occur outside the EEA, adequate safeguards apply (adequacy or SCCs).
        </p>

        <h2>5. Managing preferences</h2>
        <p>
          You can accept, reject or configure cookies at any time via our consent manager.
          You can also configure your browser to block or delete cookies.
        </p>

        <p>
          <button
            onClick={openCookieManager}
            className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm
                       text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Manage cookie preferences
          </button>
        </p>

        <h2>6. How to delete/block cookies in your browser</h2>
        <ul>
          <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data.</li>
          <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
          <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data.</li>
          <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions.</li>
        </ul>

        <h2>7. Changes to this policy</h2>
        <p>We may update this policy to reflect legal or service changes. We will publish the current version on this page.</p>

        <h2>8. Contact</h2>
        <p>Cookie questions: <a href="mailto:contact@clearfinanciallife.com">contact@clearfinanciallife.com</a>.</p>

        <h2>9. Cookie table (optional)</h2>
        <p>
          If you use a consent tool, you can list detected cookies here (name, provider, purpose, duration). Example:
        </p>
        <pre>
{`Name           Provider           Purpose                   Duration
_ga             Google Analytics   Audience measurement      13 months
_cf_bm          Cloudflare         Protection/anti-bots      30 minutes`}
        </pre>
      </div>
    </div>
  );
}
