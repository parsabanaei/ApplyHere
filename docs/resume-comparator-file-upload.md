# Resume Comparator - File Upload Feature

## Overview
The Resume Comparator now supports multiple input methods for both Resume and Job Description sides:

### Input Methods
1. **Manual Text Entry** - Copy and paste text directly into the textarea
2. **TXT File Upload** - Upload plain text files (.txt)
3. **PDF File Upload** - Upload PDF files with automatic text extraction (.pdf)

## Features

### File Upload Capabilities
- **Drag & Drop Interface**: Clean file upload buttons with visual feedback
- **File Type Validation**: Only accepts .txt and .pdf files
- **File Size Validation**: Maximum 5MB per file
- **Accurate PDF Extraction**: Uses PDF.js library for precise text extraction from PDFs
- **Error Handling**: Clear error messages for unsupported files or extraction issues

### User Experience
- **Upload Indicators**: Shows file name after successful upload
- **Clear File**: Easy removal of uploaded files with X button
- **Processing States**: Loading indicators during file processing
- **Visual Feedback**: Color-coded status messages (success/error)
- **Responsive Design**: Works on all screen sizes

### Technical Implementation

#### PDF Text Extraction (`lib/fileExtractor.ts`)
- Uses `pdfjs-dist` library for reliable PDF parsing
- Extracts text from all pages sequentially
- Preserves text structure and spacing
- Handles multi-page PDFs correctly
- Error handling for:
  - Password-protected PDFs
  - Image-based PDFs (scanned documents)
  - Corrupted files
  - Empty files

#### File Validation
- **Size Check**: Validates files are under 5MB
- **Type Check**: Ensures only .txt and .pdf files are accepted
- **Content Check**: Verifies extracted text has minimum length (10 characters)

## Usage

### For Users:
1. Click "Upload File" button on either side (Resume or Job Description)
2. Select a .txt or .pdf file from your computer
3. Wait for processing (usually instant for TXT, 1-3 seconds for PDF)
4. Text automatically populates in the textarea
5. Edit manually if needed
6. Click "Compare" to analyze keyword matches

### Error Messages:
- "File size must be less than 5MB"
- "Only .txt and .pdf files are supported"
- "The file appears to be empty or text could not be extracted"
- "Failed to extract text from PDF: [reason]"

## Benefits

### Accuracy
- Professional PDF parsing ensures accurate text extraction
- Preserves formatting and structure from original documents
- Maintains keyword integrity for accurate comparison

### Convenience
- No need to manually copy-paste from PDFs
- Supports both common file formats
- Quick processing time
- Can still edit after upload

### Accessibility
- Multiple input options for different user preferences
- Clear visual feedback throughout the process
- Helpful error messages guide users

## Technical Stack
- **pdfjs-dist**: PDF text extraction
- **React hooks**: File handling and state management
- **TypeScript**: Type-safe file operations
- **Tailwind CSS**: Responsive UI components

