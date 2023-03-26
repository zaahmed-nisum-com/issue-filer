import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const generatePdf = async (html) => {
  const file = await printToFileAsync({
      html: html,
      base64: false,
    });
  await shareAsync(file.uri);
}

export  {
  generatePdf
}