#!/bin/bash

# Script to backup all components in the Nova Bulgaria web project
# Created: March 15, 2025

# Set timestamp for the backup folder
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/Users/gl1/Codes/nova-web/nova-bulgaria-web/backups/full_backup_${TIMESTAMP}"

# Create backup directory structure
echo "Creating backup directory at ${BACKUP_DIR}..."
mkdir -p "${BACKUP_DIR}"

# Function to backup a component
backup_component() {
  local src_file="$1"
  local rel_path="${src_file#/Users/gl1/Codes/nova-web/nova-bulgaria-web/src/}"
  local backup_path="${BACKUP_DIR}/${rel_path}"
  
  # Create directory structure
  mkdir -p "$(dirname "${backup_path}")"
  
  # Copy the file
  cp "${src_file}" "${backup_path}"
  
  echo "Backed up: ${rel_path}"
}

# Backup all component files
echo "Starting backup of all components..."

# Find and backup all component files (TSX, JSX, CSS)
find /Users/gl1/Codes/nova-web/nova-bulgaria-web/src/components -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.css" \) | while read -r file; do
  backup_component "$file"
done

# Backup type definition files
find /Users/gl1/Codes/nova-web/nova-bulgaria-web/src/components -type f -name "*.d.ts" | while read -r file; do
  backup_component "$file"
done

# Backup context files that might be related to components
find /Users/gl1/Codes/nova-web/nova-bulgaria-web/src/context -type f | while read -r file; do
  backup_component "$file"
done

# Backup translation files
find /Users/gl1/Codes/nova-web/nova-bulgaria-web/src/translations -type f | while read -r file; do
  backup_component "$file"
done

# Create a manifest file with information about the backup
cat > "${BACKUP_DIR}/BACKUP_INFO.md" << EOF
# Nova Bulgaria Web Components Backup

**Backup Date:** $(date)
**Backup Location:** ${BACKUP_DIR}

## Contents
- All component files (.tsx, .jsx, .css)
- Type definition files (.d.ts)
- Context files
- Translation files

## Restoration Instructions
To restore a component, copy the file from this backup directory to the corresponding location in the src directory.

## Important Notes
- This backup includes all components as of $(date)
- Large image files like new-logo.png should be optimized before deployment
- The vendors.js bundle (600KB+) could be further optimized
EOF

# Count files and output summary
TOTAL_FILES=$(find "${BACKUP_DIR}" -type f | wc -l)
echo "Backup completed successfully!"
echo "Total files backed up: ${TOTAL_FILES}"
echo "Backup location: ${BACKUP_DIR}"
echo "See ${BACKUP_DIR}/BACKUP_INFO.md for details"
