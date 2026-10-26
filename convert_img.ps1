Add-Type -AssemblyName System.Drawing
$src = Join-Path $PSScriptRoot "theme\images\datacenter-bg.jpg"
$dst = Join-Path $PSScriptRoot "theme\images\datacenter-bg.png"
$img = [System.Drawing.Image]::FromFile($src)
$img.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
Write-Host "Converted successfully to $dst"
