import 'package:flutter/material.dart';

class SongAvatar extends StatelessWidget {
  final String imageUrl;
  final double size;

  const SongAvatar({super.key, required this.imageUrl, this.size = 40.0});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8.0), // 圓角
        child: Image.asset(
          imageUrl,
          width: size,
          height: size,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
