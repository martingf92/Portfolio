const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuración
const IMAGES_DIR = path.join(__dirname, '../public');
const QUALITY = 80; // Calidad de compresión (0-100)
const WIDTH = 1200; // Ancho máximo en píxeles

// Formatos de imagen a convertir
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Función para crear el directorio de salida si no existe
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Función para optimizar una imagen
const optimizeImage = async (inputPath, outputPath) => {
  try {
    const extname = path.extname(inputPath).toLowerCase();
    const filename = path.basename(inputPath, extname);
    const webpPath = path.join(path.dirname(outputPath), `${filename}.webp`);

    console.log(`Optimizando: ${inputPath}`);
    
    // Optimizar a WebP
    await sharp(inputPath)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    console.log(`  ✅ Optimizado: ${path.relative(process.cwd(), webpPath)}`);
    
    return {
      original: inputPath,
      optimized: webpPath,
      sizeBefore: fs.statSync(inputPath).size,
      sizeAfter: fs.statSync(webpPath).size
    };
  } catch (error) {
    console.error(`Error procesando ${inputPath}:`, error.message);
    return null;
  }
};

// Función principal
const main = async () => {
  console.log('🚀 Iniciando optimización de imágenes...');
  
  // Crear directorio de salida si no existe
  ensureDir(IMAGES_DIR);
  
  // Leer archivos del directorio de imágenes
  const files = fs.readdirSync(IMAGES_DIR, { recursive: true });
  const imageFiles = files.filter(file => 
    IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  
  if (imageFiles.length === 0) {
    console.log('No se encontraron imágenes para optimizar.');
    return;
  }
  
  console.log(`\n🔍 Encontradas ${imageFiles.length} imágenes para optimizar.`);
  
  // Procesar cada imagen
  const results = [];
  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, path.dirname(file));
    
    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      results.push(result);
    }
  }
  
  // Mostrar resumen
  if (results.length > 0) {
    const totalBefore = results.reduce((sum, r) => sum + r.sizeBefore, 0);
    const totalAfter = results.reduce((sum, r) => sum + r.sizeAfter, 0);
    const savings = ((1 - totalAfter / totalBefore) * 100).toFixed(2);
    
    console.log('\n🎉 Optimización completada!');
    console.log(`📊 Total de imágenes optimizadas: ${results.length}`);
    console.log(`💾 Tamaño total antes: ${(totalBefore / 1024).toFixed(2)} KB`);
    console.log(`💾 Tamaño total después: ${(totalAfter / 1024).toFixed(2)} KB`);
    console.log(`💰 Ahorro: ${savings}%`);
  } else {
    console.log('No se optimizaron imágenes.');
  }
};

// Ejecutar script
main().catch(console.error);
