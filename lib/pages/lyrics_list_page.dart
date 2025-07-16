import 'package:first_app/widgets/song_avatar.dart';
import 'package:flutter/material.dart';
import 'package:first_app/pages/lyrics_original_page.dart';
import 'package:first_app/pages/lyrics_furigana_page.dart';
import 'package:first_app/pages/lyrics_translation_page.dart';
import 'package:first_app/brand/basic_text.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert' show json;
import 'package:first_app/models/lyrics.dart';
import 'package:first_app/brand/bold_text.dart';

class LyricsLibraryPage extends StatelessWidget {
  const LyricsLibraryPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 252, 251, 249),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(
                  child: BoldText(text:'這是歌詞頁面'),
                  ),
                  SongAvatar(imageUrl: "assets/TeenAge.jpg", size: 80),
              ],),
          ),
          Expanded(
            child: FutureBuilder<List<Lyrics>>(
              future: loadLyrics(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Center(child: CircularProgressIndicator());
                } else if (snapshot.hasError) {
                  return Center(child: Text('Error: ${snapshot.error}'));
                } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
                  return const Center(child: Text('No lyrics found.'));
                }

                final lyricsList = snapshot.data ?? [];
                return ListView.builder(
                  itemCount: lyricsList.length,
                  itemBuilder: (context, index) {
                    final song = lyricsList[index];
                    return Card(
                      margin: const EdgeInsets.all(8.0),
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            BasicText(text: song.title),
                            const SizedBox(height: 10.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceAround,
                              children: [
                                ElevatedButton(
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder:
                                            (_) =>
                                                LyricsOriginalPage(song: song),
                                      ),
                                    );
                                  },
                                  child: const Text('原文'),
                                ),
                                ElevatedButton(
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder:
                                            (_) =>
                                                LyricsFuriganaPage(song: song),
                                      ),
                                    );
                                  },
                                  child: const Text('空耳'),
                                ),
                                ElevatedButton(
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder:
                                            (_) => LyricsTranslationPage(
                                              song: song,
                                            ),
                                      ),
                                    );
                                  },
                                  child: const Text('中譯'),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

Future<List<Lyrics>> loadLyrics() async {
  final String jsonString = await rootBundle.loadString('assets/lyrics.json');
  final List<dynamic> jsonData = json.decode(jsonString);
  return jsonData.map((item) => Lyrics.fromJson(item)).toList();
}
