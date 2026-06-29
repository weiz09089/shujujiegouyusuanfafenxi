import json
import re
import os

transcript_path = '/Users/dongwei/.gemini/antigravity-ide/brain/a2f07c30-ff99-4ccc-b311-cd1a986f2671/.system_generated/logs/transcript_full.jsonl'
output_txt = []

try:
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                content = data.get('content', '')
                if '==Start of OCR' in content:
                    matches = re.findall(r'==Start of OCR for page \d+==\n(.*?)==End of OCR for page \d+==', content, re.DOTALL)
                    if matches:
                        output_txt.extend(matches)
except Exception as e:
    print("Error reading transcript:", e)

if output_txt:
    out_path = '/Users/dongwei/Desktop/开大/三学期/深度学习/未命名文件夹/study_dsa/dsa.txt'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_txt))
    print(f"Extracted {len(output_txt)} pages of OCR text to {out_path}")
else:
    print("No OCR text found in transcript.")
