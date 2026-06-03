import { useState, useEffect } from "react";

const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "Parent Satisfaction Survey — Closing Soon",
    summary: "10-question anonymous survey about what's working and what needs improvement. Please complete before it closes.",
    category: "action",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "📋",
    link: { url: "https://www.surveymonkey.com/r/Q8G5RBD", label: "Take Survey" },
  },
  {
    id: 2,
    title: "Yearbook Orders Close March 31",
    summary: "Deadline is Tuesday, March 31st. No late orders will be accepted — order now to secure your copy.",
    category: "action",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "📸",
    link: { url: "https://strawbridge.fotomerchanthv.com/clients/arts-based-school/2025-2026-yearbook-362/access?clearSessionAuthentication=1", label: "Order Yearbook" },
  },
  {
    id: 3,
    title: "Parent Council Meeting — Friday March 20, Noon",
    summary: "Virtual meeting tomorrow at 12:00 PM. All parents welcome. Submit questions in advance via the form link.",
    category: "action",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "💬",
    link: { url: "https://us06web.zoom.us/j/89891123687?pwd=rUsYwpIyXcYdwJna6h7n27lmjMM5LQ.1", label: "Join Meeting" },
  },
  {
    id: 4,
    title: "Vote for Ms. Christian — Teacher of the Year",
    summary: "Ms. Christian has been nominated in a nationwide contest celebrating innovative teaching and creativity. Show your support!",
    category: "action",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🗳️",
    link: { url: "https://2026rrsteacherofyear.cmpgn.page/c01sVl", label: "Vote Now" },
  },
  {
    id: 5,
    title: "Vote for Mr. Greene — America's Fav Teacher",
    summary: "Mr. Greene is nominated in a national competition recognizing outstanding educators. Help him win!",
    category: "action",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🗳️",
    link: { url: "https://americasfavteacher.org/2026/matthew-greene", label: "Vote Now" },
  },
  {
    id: 6,
    title: "Spring Class Photos — Monday March 23",
    summary: "Students should come to school ready to smile for their class picture this Monday.",
    category: "calendar",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "📷",
  },
  {
    id: 7,
    title: "Good Friday (April 3) Is Now a School Day",
    summary: "The board approved using Good Friday as a make-up day to meet instructional hours, compensating for the March 16 snow cancellation. All scheduled make-up days and remote learning days have been exhausted.",
    category: "calendar",
    urgency: "high",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🗓️",
  },
  {
    id: 8,
    title: "2026–27 School Calendar Approved",
    summary: "Key dates: First day August 10. Additional snow make-up days added. Alternating in-person and remote make-up days. October 14 swapped with January 4 as a teacher workday.",
    category: "calendar",
    urgency: "medium",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "📅",
    link: { url: "https://drive.google.com/file/d/1xUv5ReNhecqaSin3tEk3g7o3wEFvv09F/view?usp=sharing", label: "View Calendar" },
  },
  {
    id: 9,
    title: "6th Grade Math & Science Dances — April 7–9",
    summary: "Students perform choreographed dances explaining physics, molecular science, and algebra vocabulary. Inspired by John Bohannan's TED talk, with visiting artist Thao Nguyen. Shows at 12:30 PM at Ewing Theater, North Campus. Free admission, donations welcome.",
    category: "enrichment",
    urgency: "medium",
    grades: ["6"],
    icon: "💃",
    feature: true,
    featureQuote: "Students describe, through dance, ideas around scientific studies of matter: atoms, molecules, their properties, what can cause them to change.",
    featureAuthor: "Mary Siebert, founding Arts Director",
  },
  {
    id: 10,
    title: "Honor Band — Congratulations to Our Musicians!",
    summary: "Eryksson Miller, Reese Maier, Autumn Meeks, and Austin Beckwith were selected for this year's Honor Band. They'll rehearse Friday night and Saturday morning and perform a concert Saturday evening. Kudos to band teacher Chris Reichmeier!",
    category: "enrichment",
    urgency: "medium",
    grades: ["5","6","7","8"],
    icon: "🎺",
  },
  {
    id: 11,
    title: "Community Creates Gala — May 2",
    summary: "ABS's biggest fundraiser. Adults-only evening with art auctions, food, and community. Tickets $60 single / $100 pair. Sponsors and art submissions welcome.",
    category: "events",
    urgency: "low",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🎨",
    link: { url: "https://docs.google.com/document/d/1B1UGg2gr3QPast8pWVT3VVfsUvsAWv78IBi6Z2XRebM/edit?usp=sharing", label: "Sponsor Info" },
  },
  {
    id: 12,
    title: "Summer Camp Registration Open",
    summary: "Multiple arts-based camps available. New this year: before-camp care from 7:45–9:00 for an additional fee.",
    category: "action",
    urgency: "medium",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🏕️",
    link: { url: "https://www.canva.com/design/DAHALwUOOsQ/4io1hZ7Vni9XDPaEFslxlg/edit", label: "View Camps" },
  },
  {
    id: 13,
    title: "Soccer Shots — K through 2nd Grade",
    summary: "Starts April 6. $108/student. Focus on skill, fitness, and sportsmanship with developmentally appropriate competition.",
    category: "afterschool",
    urgency: "medium",
    grades: ["K","1","2"],
    icon: "⚽",
    program: {
      cost: "$108 / student",
      schedule: [
        { campus: "North", day: "Wednesdays", grades: "K–2", time: "2:45–3:30" },
        { campus: "South", day: "Mondays", grades: "K–2", time: "2:45–3:30" },
      ],
    },
  },
  {
    id: 14,
    title: "South Campus Music Teacher Leaving — Know Someone?",
    summary: "Marti Bessinger will leave ABS at the end of the school year. If you know a great music educator who'd be a wonderful fit, please share the job listing.",
    category: "community",
    urgency: "low",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🎵",
    link: { url: "https://www.artsbasedschool.com/apps/pages/employment", label: "Job Listing" },
  },
  {
    id: 15,
    title: "Ice Skate Day Raised $650!",
    summary: "Thank you to everyone who came out! The funds go toward the Teacher Appreciation Lunch in May.",
    category: "community",
    urgency: "low",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "⛸️",
  },
  {
    id: 16,
    title: "Piedmont Earth Day Fair — April 18",
    summary: "Save the date for the Piedmont Earth Day Fair. Includes an art contest — details on the flyer.",
    category: "community",
    urgency: "low",
    grades: ["K","1","2","3","4","5","6","7","8"],
    icon: "🌎",
  },
];

const CATEGORIES = {
  all: { label: "All", color: "#5a4a3a" },
  action: { label: "Action Required", color: "#c0392b" },
  calendar: { label: "Calendar", color: "#2980b9" },
  enrichment: { label: "Enrichment", color: "#27ae60" },
  events: { label: "Events", color: "#8e44ad" },
  afterschool: { label: "After School", color: "#f39c12" },
  community: { label: "Community", color: "#16a085" },
};
const URGENCY = {
  high: { label: "This Week", color: "#c0392b", bg: "#fdecea" },
  medium: { label: "Coming Up", color: "#e67e22", bg: "#fef5e7" },
  low: { label: "On the Horizon", color: "#7f8c8d", bg: "#f0f0f0" },
};
const GRADES = ["K","1","2","3","4","5","6","7","8"];
const urgOrd = { high: 0, medium: 1, low: 2 };

export default function Dashboard() {
  const [grade, setGrade] = useState("all");
  const [cat, setCat] = useState("all");
  const [expanded, setExpanded] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const items = ANNOUNCEMENTS
    .filter(a => grade === "all" || a.grades.includes(grade))
    .filter(a => cat === "all" || a.category === cat);
  const actions = items.filter(a => a.link && (a.urgency === "high" || a.category === "action"));

  return (
    <div style={{ minHeight: "100vh", background: "#faf8f5", fontFamily: "'Source Serif 4', Georgia, serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 40%, #4a6741 100%)",
        padding: "28px 24px 24px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }} />
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>
            The Arts Based School
          </div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Thursday Notes</h1>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
            March 19, 2026 — {items.length} announcements{grade !== "all" ? ` for Grade ${grade}` : ""}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* Filters */}
        <div style={{
          background: "#fff", borderRadius: 12, padding: "16px 18px",
          marginTop: -16, position: "relative",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{ marginBottom: 12 }}>
            <Label>My child's grade</Label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Chip active={grade==="all"} onClick={()=>setGrade("all")} label="All" />
              {GRADES.map(g => <Chip key={g} active={grade===g} onClick={()=>setGrade(g)} label={g} />)}
            </div>
          </div>
          <div>
            <Label>Category</Label>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {Object.entries(CATEGORIES).map(([k,v]) =>
                <Chip key={k} active={cat===k} onClick={()=>setCat(k)} label={v.label} dot={k!=="all"?v.color:null} />
              )}
            </div>
          </div>
        </div>

        {/* Action Banner */}
        {actions.length > 0 && cat === "all" && (
          <div style={{
            marginTop: 24, borderRadius: 12, padding: "20px 20px 12px",
            background: "linear-gradient(135deg, #fdf2e9 0%, #fdedec 100%)",
            border: "1px solid rgba(192,57,43,0.12)",
          }}>
            <div style={{
              fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 700, color: "#c0392b",
              letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 14,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%", background: "#c0392b", color: "#fff",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700,
              }}>{actions.length}</span>
              Action Items
            </div>
            {actions.sort((a,b)=>urgOrd[a.urgency]-urgOrd[b.urgency]).map((item,i) => (
              <div key={item.id} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 0", borderTop: i ? "1px solid rgba(0,0,0,0.06)" : "none", gap: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{
                    fontFamily: "'DM Sans'", fontSize: 13.5, fontWeight: 500, color: "#2c3e50",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>{item.title}</span>
                </div>
                <a href={item.link.url} target="_blank" rel="noreferrer" style={{
                  fontFamily: "'DM Sans'", fontSize: 12, fontWeight: 600, color: "#fff",
                  background: "#c0392b", padding: "6px 14px", borderRadius: 6,
                  textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
                }}>{item.link.label} →</a>
              </div>
            ))}
          </div>
        )}

        {/* Featured Story */}
        {cat === "all" && grade === "all" && (
          <div style={{
            marginTop: 20, borderRadius: 12, overflow: "hidden",
            border: "1px solid rgba(39,174,96,0.2)",
            background: "linear-gradient(135deg, #f0faf4 0%, #f7fdf9 100%)",
          }}>
            <div style={{ padding: "20px 20px 16px" }}>
              <div style={{
                fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 700, color: "#27ae60",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8,
              }}>★ Featured — What Makes ABS Different</div>
              <div style={{
                fontFamily: "'DM Sans'", fontSize: 17, fontWeight: 700, color: "#2c3e50",
                lineHeight: 1.3, marginBottom: 10,
              }}>
                💃 6th Grade Math & Science Dances — April 7–9
              </div>
              <p style={{ fontSize: 14.5, color: "#444", lineHeight: 1.65, margin: "0 0 12px" }}>
                Students perform choreographed dances explaining physics, molecular science, and algebra vocabulary — making abstract concepts physical, playful, and unforgettable. Created with visiting artist Thao Nguyen.
              </p>
              <div style={{
                borderLeft: "3px solid #27ae60", paddingLeft: 14,
                margin: "14px 0",
              }}>
                <p style={{
                  fontStyle: "italic", fontSize: 14, color: "#555",
                  lineHeight: 1.6, margin: "0 0 6px",
                }}>
                  "We wanted our students to play with math, through movement and characterization… we hope that, when those terms are encountered again in science and math classes, a positive recognition will arise and inspire confidence."
                </p>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#888", fontWeight: 500 }}>
                  — Mary Siebert, founding Arts Director
                </span>
              </div>
              <div style={{
                fontFamily: "'DM Sans'", fontSize: 13, color: "#555", lineHeight: 1.5,
                background: "#fff", borderRadius: 8, padding: 12, marginTop: 12,
              }}>
                <strong>Performances:</strong> April 7 (Christian) · April 8 (Dejarnette) · April 9 (Tate)<br/>
                <strong>Time:</strong> 12:30 PM · Ewing Theater, North Campus<br/>
                <strong>Admission:</strong> Free — donations gratefully accepted
              </div>
            </div>
          </div>
        )}

        {/* Count */}
        <div style={{
          fontFamily: "'DM Sans'", fontSize: 12, color: "#999",
          marginTop: 24, marginBottom: 12, paddingLeft: 2,
        }}>
          {items.length} of {ANNOUNCEMENTS.length} announcements
          {grade !== "all" && ` · Grade ${grade}`}
          {cat !== "all" && ` · ${CATEGORIES[cat]?.label}`}
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.sort((a,b) => urgOrd[a.urgency]-urgOrd[b.urgency]).map((item, i) => (
            <Card key={item.id} item={item} open={expanded===item.id}
              toggle={()=>setExpanded(expanded===item.id?null:item.id)}
              delay={i*30} ready={ready} />
          ))}
        </div>

        {items.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 24px", color: "#999", fontFamily: "'DM Sans'", fontSize: 14 }}>
            No announcements match your filters.
          </div>
        )}

        <div style={{
          textAlign: "center", marginTop: 40, padding: "20px 0",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          fontFamily: "'DM Sans'", fontSize: 12, color: "#bbb",
        }}>
          The Arts Based School · 1380 MLK Jr. Drive, Winston-Salem, NC
          <br/>
          <a href="https://www.artsbasedschool.com/apps/news/article/2179935?categoryId=16078"
            target="_blank" rel="noreferrer"
            style={{ color: "#999", textDecoration: "underline" }}>
            View original Thursday Notes
          </a>
        </div>
      </div>
    </div>
  );
}

function Label({ children }) {
  return <div style={{
    fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 600,
    letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8,
  }}>{children}</div>;
}

function Chip({ active, onClick, label, dot }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'DM Sans'", fontSize: 12, fontWeight: active ? 600 : 400,
      color: active ? "#fff" : "#666",
      background: active ? "#2c3e50" : "#f5f3f0",
      border: `1px solid ${active ? "#2c3e50" : "rgba(0,0,0,0.08)"}`,
      borderRadius: 20, padding: "5px 12px", cursor: "pointer",
      display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s ease",
    }}>
      {dot && !active && <span style={{ width: 7, height: 7, borderRadius: "50%", background: dot }} />}
      {label}
    </button>
  );
}

function Card({ item, open, toggle, delay, ready }) {
  const c = CATEGORIES[item.category] || CATEGORIES.events;
  const u = URGENCY[item.urgency] || URGENCY.medium;
  return (
    <div onClick={toggle} style={{
      background: "#fff", borderRadius: 10, border: "1px solid rgba(0,0,0,0.06)",
      overflow: "hidden", cursor: "pointer",
      transition: "all 0.3s ease, opacity 0.4s ease, transform 0.4s ease",
      transitionDelay: `${delay}ms`,
      opacity: ready ? 1 : 0, transform: ready ? "translateY(0)" : "translateY(8px)",
      boxShadow: open ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.03)",
    }}>
      <div style={{ padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12 }}>
        <span style={{ fontSize: 20, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 600, color: c.color,
              background: c.color + "14", padding: "2px 8px", borderRadius: 4,
              textTransform: "uppercase", letterSpacing: "0.05em",
            }}>{c.label}</span>
            <span style={{
              fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 600, color: u.color,
              background: u.bg, padding: "2px 8px", borderRadius: 4,
            }}>{u.label}</span>
            {item.grades.length > 0 && item.grades.length < 9 && (
              <span style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#aaa" }}>
                {item.grades.length === 1 ? `Grade ${item.grades[0]}` : `Grades ${item.grades[0]}–${item.grades[item.grades.length-1]}`}
              </span>
            )}
          </div>
          <div style={{
            fontFamily: "'DM Sans'", fontSize: 14, fontWeight: 600, color: "#2c3e50", lineHeight: 1.35,
          }}>{item.title}</div>
          {item.feature && !open && (
            <div style={{
              fontFamily: "'DM Sans'", fontSize: 10, color: "#27ae60", fontWeight: 600,
              marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>★ Featured Story</div>
          )}
        </div>
        <span style={{
          fontFamily: "'DM Sans'", fontSize: 16, color: "#ccc",
          transition: "transform 0.2s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          flexShrink: 0, marginTop: 4,
        }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "0 16px 16px 48px", animation: "fadeIn 0.2s ease" }}>
          <p style={{ margin: "0 0 12px", fontSize: 14, color: "#555", lineHeight: 1.6 }}>{item.summary}</p>
          {item.program && (
            <div style={{ background: "#faf8f5", borderRadius: 8, padding: 12, marginBottom: 12 }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 12, fontWeight: 700, color: "#2c3e50", marginBottom: 8 }}>
                {item.program.cost}
              </div>
              <table style={{ width: "100%", fontFamily: "'DM Sans'", fontSize: 12, borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    {["Campus","Day","Grades","Time"].map(h =>
                      <th key={h} style={{ textAlign: "left", padding: "4px 8px 6px 0", fontWeight: 600, color: "#999", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {item.program.schedule.map((s,i) =>
                    <tr key={i}>
                      <td style={{ padding: "6px 8px 4px 0", color: "#555" }}>{s.campus}</td>
                      <td style={{ padding: "6px 8px 4px 0", color: "#555" }}>{s.day}</td>
                      <td style={{ padding: "6px 8px 4px 0", color: "#555" }}>{s.grades}</td>
                      <td style={{ padding: "6px 8px 4px 0", color: "#555" }}>{s.time}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          {item.link && (
            <a href={item.link.url} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                fontFamily: "'DM Sans'", display: "inline-block", fontSize: 13, fontWeight: 600,
                color: "#fff", background: c.color, padding: "8px 18px", borderRadius: 6, textDecoration: "none",
              }}>{item.link.label} →</a>
          )}
        </div>
      )}
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
}
