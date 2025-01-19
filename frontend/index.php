<?php
// Get the requested URI
$request = $_SERVER['REQUEST_URI'];

// Check if the file exists (e.g., CSS, JS, images)
$file = $_SERVER['DOCUMENT_ROOT'] . $request;
if (file_exists($file)) {
    return false; // Serve the requested resource as-is
}

// All other routes fall back to index.html
include('index.html');