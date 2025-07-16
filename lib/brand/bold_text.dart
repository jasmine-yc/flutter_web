import 'package:flutter/material.dart';

class BoldText extends StatelessWidget {
  final String text;
  const BoldText({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        color: Colors.black,
        fontSize: 20.0,
        letterSpacing: 1.0,
        fontWeight: FontWeight.bold,
      ),
    );
  }
}