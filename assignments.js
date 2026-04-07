// ============================================================
//  ASSIGNMENTS DATA
// ============================================================
//
//  Google Drive URL fix:
//    Share link → https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//    embedUrl   → https://drive.google.com/file/d/FILE_ID/preview   ← just /preview
//    openUrl    → https://drive.google.com/file/d/FILE_ID/view
//
//  Single file assignment:
//    { id, title, embedUrl, openUrl }
//
//  Multiple files (PDFs + images combined):
//    { id, title, files: [ { label, embedUrl, openUrl }, ... ] }
//
//  Website link:
//    { id, title, embedUrl: "https://your-site.com", openUrl: "https://your-site.com" }
// ============================================================

const assignments = [
  {
    id: 1,
    title: "Assignment 1 — National Energy Scenario",
    embedUrl: "https://drive.google.com/file/d/1D2VXoELhwv6VrzdJBPCllXN_VRczU0lm/preview",
    openUrl:  "https://drive.google.com/file/d/1D2VXoELhwv6VrzdJBPCllXN_VRczU0lm/view",
  },
  {
    id: 2,
    title: "Assignment 2",
      files: [
      { label: " 2 a",  embedUrl: "https://drive.google.com/file/d/1PkHoyjHNofIpESh6rRkDLdByI0vKD7z1/preview", openUrl: "https://drive.google.com/file/d/1PkHoyjHNofIpESh6rRkDLdByI0vKD7z1/view" },
      { label: "2 b", embedUrl: "https://drive.google.com/file/d/1QlQhq2PVcIjasj3H23rKcu1Sl9gIvgaL/preview", openUrl: "https://drive.google.com/file/d/1QlQhq2PVcIjasj3H23rKcu1Sl9gIvgaL/view" },
    ],
  },
  {
    // Website assignment — paste your site URL directly
    id: 3,
    title: "Assignment 3 — Website",
    embedUrl: "https://vit-energy-dashboard-101.streamlit.app/",
    openUrl:  "https://vit-energy-dashboard-101.streamlit.app/",
  },
  {
    id: 4,
    title: "Assignment 4",
    embedUrl: "https://drive.google.com/file/d/10EbQlgyeXK8EOcDGGKet35KMcN0eCqOC/preview",
    openUrl:  "https://drive.google.com/file/d/10EbQlgyeXK8EOcDGGKet35KMcN0eCqOC/view",
  },
  {
    id: 5,
    title: "Assignment 5",
    embedUrl: "https://drive.google.com/file/d/14h6TbCPYaMQ9RtuMlUzMH3E7zfaSKzZe/preview",
    openUrl:  "https://drive.google.com/file/d/14h6TbCPYaMQ9RtuMlUzMH3E7zfaSKzZe/view",
  },
  {
    id: 6,
    title: "Assignment 6",
    embedUrl: "https://drive.google.com/file/d/1Yh-YgInF_Zjx8k5rXpjnsLuXc-dxWcgF/preview",
    openUrl:  "https://drive.google.com/file/d/1Yh-YgInF_Zjx8k5rXpjnsLuXc-dxWcgF/view",
  },
  {
    id: 7,
    title: "Assignment 7 -> Quiz",
    embedUrl: "https://drive.google.com/file/d/1ujL2QO5qJ0SxuM3AhsY9h7-StRVSJzT4/preview",
    openUrl:  "https://drive.google.com/file/d/1ujL2QO5qJ0SxuM3AhsY9h7-StRVSJzT4/view",
  },
  {
    id: 8,
    title: "Assignment 8 -> Research Paper",
      files: [
      { label: " Reseach Paper",  embedUrl: "https://drive.google.com/file/d/1P-cUF_SDqotb4TFP2e7YCpfP3eWtS0Kg/preview", openUrl: "https://drive.google.com/file/d/1P-cUF_SDqotb4TFP2e7YCpfP3eWtS0Kg/view" },
      { label: "Paper Submission Evidance", embedUrl: "https://drive.google.com/file/d/1DsicB0x5q4NnW_k8sr2m_sE7nWkZiAN4/preview", openUrl: "https://drive.google.com/file/d/1DsicB0x5q4NnW_k8sr2m_sE7nWkZiAN4/view" },
      {label: "Link of LinkedIN Post", embedUrl: "https://www.linkedin.com/posts/aquibkhan0009_research-paper-on-smart-energy-management-ugcPost-7447159631157682176-JGoC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEO0qY0Bbxjok6KkGB_VL_UmZI49GlHMKqs", openUrl: "https://www.linkedin.com/posts/aquibkhan0009_research-paper-on-smart-energy-management-ugcPost-7447159631157682176-JGoC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEO0qY0Bbxjok6KkGB_VL_UmZI49GlHMKqs" },
    ],
  },
  {
    id: 9,
    title: "Assignment 9",
      files: [
      { label: "Mind Map",  embedUrl: "https://drive.google.com/file/d/1mUxIf7fSlLJQL8hNx7Yx-FxU5a774d3H/preview", openUrl: "https://drive.google.com/file/d/1mUxIf7fSlLJQL8hNx7Yx-FxU5a774d3H/view" },
      { label: "Summary", embedUrl: "https://docs.google.com/document/d/1A94kM7OQ0xLFV5mHsy-72kx-YsDPpKsn/preview", openUrl: "https://docs.google.com/document/d/1A94kM7OQ0xLFV5mHsy-72kx-YsDPpKsn/view" },
      { label: "Quiz",  embedUrl: "https://drive.google.com/file/d/13ShMR1a2dCy3Ns-sutnhwCNvY1tAizah/preview", openUrl: "https://drive.google.com/file/d/13ShMR1a2dCy3Ns-sutnhwCNvY1tAizah/view" },
      { label: "Flashcards", embedUrl: "https://drive.google.com/file/d/1K2Ba2crcmiaQh0XrTRprgWypeqF0tMLa/preview", openUrl: "https://drive.google.com/file/d/1K2Ba2crcmiaQh0XrTRprgWypeqF0tMLa/view" },
      { label: "YouTube Video Link", embedUrl: "https://www.youtube.com/embed/GWB9ApTPTv4", openUrl: "https://www.youtube.com/watch?v=GWB9ApTPTv4" },
    ],
    },
  {
    id: 10,
    title: "Assignment 10 -> Assignment Dashboard",
    embedUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_10/preview",
    openUrl:  "https://drive.google.com/file/d/YOUR_FILE_ID_10/view",
  },
];
