import 'package:flutter/material.dart';
import '../models/lyrics.dart';

class LyricsTranslationPage extends StatelessWidget {
  final Lyrics song;

  const LyricsTranslationPage({super.key, required this.song});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('${song.title} - 中譯'),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(255, 146, 170, 194),
      ),
      backgroundColor: Color.fromARGB(255, 255, 249, 242),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Text(song.translation),
      ),
    );
  }
}
