import React from 'react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: "Know Your Rights",
      links: [
        {
          title: "Orange County Declaration of Tenants' Rights and Obligations",
          url: "https://townofchapelhill.org/home/showpublisheddocument?id=22538",
          description: "A plain-language guide to North Carolina renter law as it applies here: deposits, repairs, late fees, retaliation, and evictions. Written by the UNC Law civil legal clinic and local community groups."
        },
        {
          title: "NC Tenant Security Deposit Act",
          url: "https://www.ncleg.gov/EnactedLegislation/Statutes/html/byarticle/chapter_42/article_6.html",
          description: "The state law on deposits. On a lease, a landlord can hold at most two months' rent, and must return it or send an itemized list of deductions within 30 days of move-out."
        },
        {
          title: "NC Residential Rental Agreements Act",
          url: "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_42/Article_5.html",
          description: "The state law that requires landlords to keep your home fit and safe to live in and to make repairs."
        },
        {
          title: "UNC Off-Campus Student Life",
          url: "https://offcampus.unc.edu/",
          description: "UNC's office for students renting off campus, with guides and housing listings. offcampus@unc.edu · 919-445-5049"
        },
      ]
    },
    {
      category: "Free Legal Help",
      links: [
        {
          title: "Carolina Student Legal Services",
          url: "https://uncstudentlegal.unc.edu/",
          description: "Free attorneys for full-time UNC students: lease reviews, deposit disputes, repairs, subleasing, and evictions. Can't take cases against UNC or another student. Carolina Union, Suite 3512 · 919-962-1303"
        },
        {
          title: "Legal Aid of North Carolina",
          url: "https://legalaidnc.org/justicehub/",
          description: "Free civil legal help for eligible renters, including evictions. Apply online or call 1-866-219-5262 (weekdays 9 a.m.–3 p.m.)."
        },
        {
          title: "Orange County Eviction Diversion Program",
          url: "https://orangecountync.gov/3153/Eviction-Diversion-Program",
          description: "If your landlord is trying to evict you: free legal advice and possible representation in court. Start by calling the Housing Helpline at 919-245-2655."
        },
      ]
    },
    {
      category: "Report a Problem or Get Help Now",
      links: [
        {
          title: "Chapel Hill Code Enforcement",
          url: "https://www.chapelhillnc.gov/Business-and-Development/Code-Enforcement",
          description: "Report conditions your landlord won't fix in Chapel Hill: leaks, pests, poor ventilation, unsafe systems. 919-968-2718 · codeenforcement@chapelhillnc.gov"
        },
        {
          title: "Carrboro Tenant Assistance",
          url: "https://www.carrboronc.gov/2622/Tenant-Rights",
          description: "The Town of Carrboro can inspect your unit for housing code violations. Inspections: 919-918-7336"
        },
        {
          title: "Orange County Housing Helpline",
          url: "https://orangecountync.gov/3706/Housing-Helpline",
          description: "Behind on rent or facing eviction: referrals, emergency financial help, and eviction support. 919-245-2655 (weekdays 10 a.m.–4 p.m.) · housinghelp@orangecountync.gov"
        },
        {
          title: "Orange County Civil Rights: Fair Housing",
          url: "https://orangecountync.gov/3376/Civil-Rights-Fair-Housing",
          description: "Report housing discrimination. Free and confidential. 919-245-2594 · civilrights@orangecountync.gov"
        },
        {
          title: "NC 211",
          url: "https://nc211.org/",
          description: "24/7 referrals for rent assistance and emergency shelter anywhere in North Carolina. Dial 2-1-1 or call 1-888-892-1162."
        },
      ]
    }
  ];

  return (
    <div className="resources-page">
      <div className="hero">
        <h1>Renter Resources</h1>
        <p className="hero__subtitle">Helpful information, legal aid, and support for tenants in Chapel&nbsp;Hill and Carrboro.</p>
      </div>
      <div className="resources-content">
        <div className="resources-categories">
          {resources.map((section, index) => (
            <div key={index} className="resources-category">
              <div className="resources-category__header">
                <h2 className="resources-category__title">{section.category}</h2>
              </div>
              <div>
                {section.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="resources-link">
                    <div className="resources-link__inner">
                      <div>
                        <h3 className="resources-link__title">{link.title}</h3>
                        <p className="resources-link__desc">{link.description}</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="resources-link__icon" style={{ width: '1.25rem', height: '1.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        <div className="resources-disclaimer">
          <div className="resources-disclaimer__icon">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="resources-disclaimer__title">Disclaimer</h4>
            <p className="resources-disclaimer__text">
              The information provided on this page is for educational purposes only and does not constitute legal advice.
              Please consult with a qualified attorney or legal aid organization for advice regarding your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
