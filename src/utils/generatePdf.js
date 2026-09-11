import { jsPDF } from 'jspdf';
import { personalInfo, experiences, skillCategories, projects } from '../data/portfolioData';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const primaryColor = [27, 38, 59]; // #1b263b
  const darkColor = [43, 45, 66]; // #2b2d42
  const secondaryColor = [141, 153, 174]; // #8d99ae
  const lightBg = [237, 242, 244]; // #edf2f4

  let y = 18;
  const leftMargin = 16;
  const pageWidth = 210;
  const contentWidth = pageWidth - leftMargin * 2;

  // Header Banner Accent Bar
  doc.setFillColor(...primaryColor);
  doc.rect(leftMargin, y, contentWidth, 24, 'F');

  // Header Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(personalInfo.name.toUpperCase(), leftMargin + 6, y + 10);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`${personalInfo.title} | ${personalInfo.statusBadge}`, leftMargin + 6, y + 17);

  y += 30;

  // Contact Info Row
  doc.setFontSize(8.5);
  doc.setTextColor(...darkColor);
  doc.setFont('helvetica', 'bold');
  doc.text('Email:', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.text(personalInfo.email, leftMargin + 12, y);

  doc.setFont('helvetica', 'bold');
  doc.text('Location:', leftMargin + 62, y);
  doc.setFont('helvetica', 'normal');
  doc.text(personalInfo.location, leftMargin + 78, y);

  doc.setFont('helvetica', 'bold');
  doc.text('GitHub:', leftMargin + 105, y);
  doc.setFont('helvetica', 'normal');
  doc.text('github.com/axatshukla', leftMargin + 120, y);

  doc.setFont('helvetica', 'bold');
  doc.text('LinkedIn:', leftMargin + 155, y);
  doc.setFont('helvetica', 'normal');
  doc.text('in/akshatshuklaa', leftMargin + 170, y);

  y += 7;
  doc.setDrawColor(...secondaryColor);
  doc.setLineWidth(0.3);
  doc.line(leftMargin, y, pageWidth - leftMargin, y);

  y += 7;

  // Section 1: Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('PROFILE SUMMARY', leftMargin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...darkColor);
  const summaryLines = doc.splitTextToSize(
    `${personalInfo.aboutHeading} ${personalInfo.aboutDescription}`,
    contentWidth
  );
  doc.text(summaryLines, leftMargin, y);
  y += summaryLines.length * 4 + 3;

  // Section 2: Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('EDUCATION', leftMargin, y);
  y += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...darkColor);
  doc.text('Bachelor of Technology in Computer Science & Engineering', leftMargin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('2022 - 2026', pageWidth - leftMargin - 18, y);
  y += 4;
  doc.setTextColor(...secondaryColor);
  doc.text('Focus: Artificial Intelligence, Distributed Systems & Modern Web Architecture', leftMargin, y);
  y += 7;

  // Section 3: Technical Arsenal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('TECHNICAL SKILLS', leftMargin, y);
  y += 5;

  doc.setFontSize(8.5);
  skillCategories.slice(0, 5).forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(`${cat.title}:`, leftMargin, y);
    
    doc.setFont('helvetica', 'normal');
    const skillList = cat.skills.map(s => s.name).join(', ');
    doc.text(skillList, leftMargin + 32, y);
    y += 4.5;
  });

  y += 3;

  // Section 4: Work Experience
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('EXPERIENCE', leftMargin, y);
  y += 5;

  experiences.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...darkColor);
    doc.text(`${exp.role} — ${exp.company}`, leftMargin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...secondaryColor);
    doc.text(`${exp.period} | ${exp.location}`, pageWidth - leftMargin - 45, y);
    y += 4.5;

    exp.projects.forEach((proj) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(...darkColor);
      doc.text(`• ${proj.title}`, leftMargin + 3, y);
      y += 4;

      proj.bullets.forEach((bullet) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(60, 60, 60);
        const bLines = doc.splitTextToSize(`- ${bullet}`, contentWidth - 8);
        doc.text(bLines, leftMargin + 6, y);
        y += bLines.length * 3.6;
      });
    });
    y += 2;
  });

  // Section 5: Featured Projects
  if (y < 250) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...primaryColor);
    doc.text('FEATURED PROJECTS', leftMargin, y);
    y += 5;

    projects.slice(0, 3).forEach((p) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(...darkColor);
      doc.text(`${p.title} (${p.tags.slice(0, 3).join(', ')})`, leftMargin, y);
      y += 3.8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(70, 70, 70);
      const descLines = doc.splitTextToSize(p.description, contentWidth - 4);
      doc.text(descLines, leftMargin + 3, y);
      y += descLines.length * 3.5 + 2;
    });
  }

  // Save the PDF
  doc.save('Akshat_Shukla_Resume.pdf');
}
