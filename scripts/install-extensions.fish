#!/usr/bin/env fish

set extensions_file (dirname (status filename))/../.vscode/extensions.json

python3 -c '
import json
import sys

with open(sys.argv[1]) as f:
    extensions = json.load(f)["recommendations"]

print("\n".join(extensions))
' $extensions_file | while read -l extension
    echo "Installing $extension"
    code --install-extension $extension
end
