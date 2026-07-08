import re
import json

def extract_emojis_from_check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Match strings inside the array
    emojis = re.findall(r'"([^"]+)"', content)
    return emojis

def normalize(e):
    # Remove Variation Selector-16
    e = e.replace('\ufe0f', '')
    return e

def extract_emojis_from_check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Match strings inside the array
    emojis = re.findall(r'"([^"]+)"', content)
    return emojis

def extract_emojis_from_emojis_js(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We are looking for keys in objects like emojis_language[lang][X] = { "emoji": [...] }
    found = re.findall(r'"([^"]+)"\s*:\s*\[', content)
    emojis = set()
    for e in found:
        # Normalize and remove skin_tone placeholder
        normalized = normalize(e.replace('{{skin_tone}}', ''))
        emojis.add(normalized)
    return emojis

to_check = extract_emojis_from_check_file('emojis_to_check.txt')
existing = extract_emojis_from_emojis_js('js/emojis.js')

missing = []
for e in to_check:
    if normalize(e) not in existing:
        missing.append(e)

print(f"Total to check: {len(to_check)}")
print(f"Total existing: {len(existing)}")
print(f"Missing emojis ({len(missing)}):")
print(" ".join(missing))

print(f"Total to check: {len(to_check)}")
print(f"Total existing: {len(existing)}")
print(f"Missing emojis ({len(missing)}):")
print(" ".join(missing))
