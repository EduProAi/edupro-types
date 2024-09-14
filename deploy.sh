#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "Build successful. Proceeding with commit and push."

    # Add all changes to git
    git add .

    # Commit changes
    echo "Enter commit message:"
    read commit_message
    git commit -m "$commit_message"

    # Push changes to remote repository
    git push origin main

    echo "Deployment complete!"
else
    echo "Build failed. Aborting deployment."
    exit 1
fi
