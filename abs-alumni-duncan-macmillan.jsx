import { useState, useEffect, useRef } from "react";

const TIMELINE = [
  { year: "2008", label: "Kindergarten at ABS", detail: "Began his K\u20138 journey at The Arts Based School" },
  { year: "2013", label: "Romeo and Juliet", detail: "First person to ever deliver the line \u201Cparty\u2019s over, ladies\u201D on the ABS stage" },
  { year: "2016", label: "Graduated from ABS", detail: "Played Zazu in the first-ever ABS production of The Lion King" },
  { year: "2016\u201320", label: "RJ Reynolds High School", detail: "A Cappella, main stage plays & musicals, NC Honors Chorus, learned guitar and banjo" },
  { year: "2020", label: "College begins \u2014 online", detail: "Started during COVID. Channeled creative energy into songwriting, wrote an album during the pandemic" },
  { year: "2024", label: "Outer Banks, Netflix", detail: "Joined the production crew of the hit Netflix series, working through its final three seasons" },
  { year: "2026", label: "Returns to ABS", detail: "Delivered the commencement address on the same stage where he once played Zazu" },
];

export default function AlumniSpotlight() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(new Set());
  const observers = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.dataset.reveal]));
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const isVis = (id) => visible.has(id);

  return (
    <div style={{ background: "#FDFBF7", minHeight: "100vh", fontFamily: "'Lora', Georgia, serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes drawLine { from { height: 0; } to { height: 100%; } }
        .reveal { opacity: 0; transform: translateY(24px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.show { opacity: 1; transform: translateY(0); }
        .pullquote { position: relative; padding: 32px 0 32px 28px; margin: 40px 0; }
        .pullquote::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #4A6741 0%, #8FB583 100%); border-radius: 2px;
        }
        .timeline-dot {
          width: 12px; height: 12px; border-radius: 50%; border: 2px solid #4A6741;
          background: #FDFBF7; position: absolute; left: -6px; top: 6px; z-index: 2;
          transition: background 0.3s ease;
        }
        .timeline-item:hover .timeline-dot { background: #4A6741; }
        a.cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
          color: #fff; background: #4A6741; padding: 12px 24px; border-radius: 8px;
          text-decoration: none; transition: all 0.2s ease; letter-spacing: 0.02em;
        }
        a.cta:hover { background: #3d5636; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(74,103,65,0.25); }
      `}</style>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(170deg, #2C3E50 0%, #1a2a36 50%, #4A6741 100%)",
        padding: "0 24px", minHeight: 520, display: "flex", alignItems: "flex-end",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
        <div style={{
          position: "absolute", top: 32, left: 24, right: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
            The Arts Based School
          </div>
          <div style={{
            fontFamily: "'Outfit'", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#4A6741", background: "rgba(255,255,255,0.12)",
            padding: "5px 14px", borderRadius: 20, backdropFilter: "blur(8px)",
          }}>
            Alumni Spotlight
          </div>
        </div>
        <div style={{
          maxWidth: 680, margin: "0 auto", paddingBottom: 48, width: "100%",
          animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.2s both",
        }}>
          <div style={{
            fontFamily: "'Outfit'", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "#8FB583", marginBottom: 16,
          }}>
            Commencement Address &middot; Class of 2026
          </div>
          <h1 style={{
            fontSize: 42, fontWeight: 700, color: "#fff", lineHeight: 1.15,
            margin: "0 0 16px",
          }}>
            Duncan MacMillan
          </h1>
          <p style={{
            fontFamily: "'Outfit'", fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6, margin: 0, maxWidth: 520,
          }}>
            Writer. Musician. Filmmaker. ABS Class of 2016.
            <br />
            From playing Zazu on this stage to working on Netflix's <em>Outer Banks</em>&nbsp;&mdash; Duncan returned to the place where it all started.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Lede */}
        <div data-reveal="lede" className={`reveal ${isVis("lede") ? "show" : ""}`}>
          <p style={{ fontSize: 19, lineHeight: 1.8, color: "#333", margin: "0 0 28px" }}>
            On a warm May afternoon in 2026, Duncan MacMillan walked back into the Alex Ewing Theater at The Arts Based School. Ten years earlier, he'd graduated from the same stage. This time, he was the commencement speaker&nbsp;&mdash; returning to tell the Class of 2026 what a decade of creating, failing, and starting over had taught him.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            Duncan spent nine years at ABS, from kindergarten through 8th grade. He played Zazu in the school's first-ever production of <em>The Lion King</em>. He did Science Fairs, Book Fairs, African drumming with Mr. Bill, and Friday Sing. He built friendships that, as he told the graduates, defined what community means to him&nbsp;&mdash; even when life pulled those friends in different directions.
          </p>
        </div>

        {/* Pull quote 1 */}
        <div data-reveal="q1" className={`reveal pullquote ${isVis("q1") ? "show" : ""}`}>
          <p style={{ fontSize: 22, fontStyle: "italic", fontWeight: 500, color: "#2C3E50", lineHeight: 1.6, margin: 0 }}>
            &ldquo;The foundation in the arts that ABS built within me stayed. I was nervous to audition for the A Cappella class. But I did, and I got in. I acted in all but one of the main stage plays and musicals.&rdquo;
          </p>
          <span style={{ fontFamily: "'Outfit'", fontSize: 13, color: "#999", fontWeight: 500, display: "block", marginTop: 12 }}>
            On carrying ABS forward to RJ Reynolds High School
          </span>
        </div>

        {/* ABS to career */}
        <div data-reveal="career" className={`reveal ${isVis("career") ? "show" : ""}`}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            After high school, Duncan started college during the COVID-19 pandemic&nbsp;&mdash; fully online. Rather than see it as a setback, he channeled the disruption into songwriting and recorded an album. When he arrived on campus, he studied songwriting, music, and filmmaking. After graduation, he landed a role on the production of <em>Outer Banks</em>, the Netflix series that premiered during lockdown and ran for five seasons.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            Standing on the ABS stage, Duncan connected the dots for the graduates: ten years earlier, he had no idea he'd be doing any of it. But the creative confidence ABS gave him&nbsp;&mdash; the willingness to try things, to perform, to make something and share it&nbsp;&mdash; was the through line.
          </p>
        </div>

        {/* Pull quote 2 — the big one */}
        <div data-reveal="q2" className={`reveal pullquote ${isVis("q2") ? "show" : ""}`}
          style={{ background: "linear-gradient(135deg, #f0faf4 0%, #f7fdf9 100%)", borderRadius: 12, padding: "32px 28px 32px 32px", margin: "40px -8px" }}>
          <p style={{ fontSize: 22, fontStyle: "italic", fontWeight: 500, color: "#2C3E50", lineHeight: 1.6, margin: "0 0 12px" }}>
            &ldquo;It's necessary to make bad art first. Don't be afraid of it. Don't let it stop you. And the best part about it? No one ever has to see it. It's yours to share, or not. So try everything, without fear of failing.&rdquo;
          </p>
          <span style={{ fontFamily: "'Outfit'", fontSize: 13, color: "#4A6741", fontWeight: 600, display: "block" }}>
            To the Class of 2026
          </span>
        </div>

        {/* On making bad art */}
        <div data-reveal="badart" className={`reveal ${isVis("badart") ? "show" : ""}`}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            The heart of Duncan's speech was his case for making bad art. Not as a throwaway line, but as a philosophy: feeling like your work doesn't measure up means you have a standard of excellence. Failure pushes you to grow. And the privacy of early creative work&nbsp;&mdash; the fact that no one has to see it&nbsp;&mdash; means there's no reason not to start.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            He also spoke candidly about AI, telling the graduates that while it's a powerful tool, using it to do your creative work for you means missing the point entirely. The learning, he said, is in the doing&nbsp;&mdash; not the output.
          </p>
        </div>

        {/* Pull quote 3 */}
        <div data-reveal="q3" className={`reveal pullquote ${isVis("q3") ? "show" : ""}`}>
          <p style={{ fontSize: 22, fontStyle: "italic", fontWeight: 500, color: "#2C3E50", lineHeight: 1.6, margin: 0 }}>
            &ldquo;Staying in touch is a choice. It's always in your hands. Your lives will move in different directions, but even if it's been a year, or two, or five years, you can make the choice to reach back out to each other.&rdquo;
          </p>
          <span style={{ fontFamily: "'Outfit'", fontSize: 13, color: "#999", fontWeight: 500, display: "block", marginTop: 12 }}>
            On the ABS community
          </span>
        </div>

        {/* Community section */}
        <div data-reveal="community" className={`reveal ${isVis("community") ? "show" : ""}`}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#555", margin: "0 0 28px" }}>
            The speech ended where it began&nbsp;&mdash; with community. Duncan described how his closest ABS friendships drifted after graduation, how the gap widened until it felt too late to bridge. But he did bridge it, reconnecting with a high school best friend years later, traveling to visit him in New York. His message to the graduates was simple: keeping in touch takes courage, and it's always worth it.
          </p>
        </div>

        {/* Timeline */}
        <div data-reveal="timeline" className={`reveal ${isVis("timeline") ? "show" : ""}`} style={{ margin: "56px 0" }}>
          <h2 style={{
            fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#4A6741", marginBottom: 32,
          }}>
            Duncan's Journey
          </h2>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
              background: "linear-gradient(180deg, #4A6741 0%, #d4e5cf 100%)",
            }} />
            {TIMELINE.map((item, i) => (
              <div key={i} className="timeline-item" style={{
                position: "relative", marginBottom: i < TIMELINE.length - 1 ? 28 : 0,
                paddingLeft: 20,
              }}>
                <div className="timeline-dot" />
                <div style={{
                  fontFamily: "'Outfit'", fontSize: 12, fontWeight: 700,
                  color: "#4A6741", letterSpacing: "0.05em", marginBottom: 2,
                }}>
                  {item.year}
                </div>
                <div style={{
                  fontFamily: "'Outfit'", fontSize: 15, fontWeight: 600,
                  color: "#2C3E50", marginBottom: 2,
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, color: "#888", lineHeight: 1.5 }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div data-reveal="cta" className={`reveal ${isVis("cta") ? "show" : ""}`} style={{
          background: "linear-gradient(135deg, #2C3E50 0%, #4A6741 100%)",
          borderRadius: 16, padding: "36px 32px", margin: "48px 0",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div style={{ position: "relative" }}>
            <h3 style={{
              fontFamily: "'Outfit'", fontSize: 20, fontWeight: 700,
              color: "#fff", margin: "0 0 8px",
            }}>
              The ABS story starts in kindergarten.
            </h3>
            <p style={{
              fontFamily: "'Outfit'", fontSize: 14, fontWeight: 300,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 20px", maxWidth: 440,
            }}>
              Learn how arts-integrated education at The Arts Based School builds creative confidence that lasts a lifetime.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="cta" href="https://www.artsbasedschool.com/apps/pages/index.jsp?uREC_ID=1676496&type=d&pREC_ID=1828573" target="_blank" rel="noreferrer">
                Schedule a Tour &rarr;
              </a>
              <a className="cta" href="https://www.artsbasedschool.com/apps/pages/index.jsp?uREC_ID=1676496&type=d&pREC_ID=2279146" target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}>
                Apply to ABS
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: 48, paddingTop: 24,
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 12, color: "#bbb", lineHeight: 1.8 }}>
            The Arts Based School &middot; 1380 MLK Jr. Drive, Winston-Salem, NC
            <br />
            <a href="https://www.artsbasedschool.com/" target="_blank" rel="noreferrer" style={{ color: "#999", textDecoration: "underline" }}>
              artsbasedschool.com
            </a>
            {" "}&middot;{" "}
            <a href="https://www.artsbasedschool.com/apps/pages/index.jsp?uREC_ID=1676496&type=d&pREC_ID=1828573" target="_blank" rel="noreferrer" style={{ color: "#999", textDecoration: "underline" }}>
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
