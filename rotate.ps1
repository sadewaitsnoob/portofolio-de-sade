Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\portofolio-de-sade\public\photo.JPG")
$img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
$img.Save("d:\portofolio-de-sade\public\photo_rotated.JPG", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
Write-Host "Done"
