function calculateCylinderVolume(radius, height) {
  const pi = 3.14159
  let volume = pi * (radius ** 2) * height;
  console.log(`Hasil volume dari silinder yang memiliki jari-jari ${radius} dan tinggi ${height} adalah ${volume}cm^3`);
}

calculateCylinderVolume(10, 25);
