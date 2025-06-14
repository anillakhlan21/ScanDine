#!/bin/bash
# filepath: /Users/anillakhlan/Desktop/My Projects/ScanDine/group-components.sh

COMP_DIR="apps/scan-dine-customer/src/app/pages"

cd "$COMP_DIR" || exit 1

for file in *.component.*; do
  # Extract the component name (e.g., header from header.component.ts)
  comp_name=$(echo "$file" | cut -d'.' -f1)
  # Create the folder if it doesn't exist
  mkdir -p "$comp_name"
  # Move all files for this component into its folder
  mv "$comp_name".component.* "$comp_name"/
done

echo "All components have been grouped into their own folders."