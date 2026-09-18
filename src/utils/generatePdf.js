export function downloadResumePDF() {
  const link = document.createElement('a');
  link.href = '/Akshat_Shukla_Resume.pdf';
  link.download = 'Akshat_Shukla_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

