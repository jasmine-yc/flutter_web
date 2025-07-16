import 'package:flutter/material.dart';

class BookAvatar extends StatelessWidget {
  final String imageUrl;
  final double size;

  const BookAvatar({
    super.key,
    required this.imageUrl,
    this.size = 60.0,
  });

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: size/2,
      backgroundImage: AssetImage(imageUrl),
      backgroundColor: Colors.transparent,
    );
  }
}