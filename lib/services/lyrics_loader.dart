import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/lyrics.dart';

class LyricsLoader {
  static Future<List<Lyrics>> loadLyrics() async {
    final String jsonString = await rootBundle.loadString('assets/lyrics.json');
    final List<dynamic> jsonData = json.decode(jsonString);
    return jsonData.map((data) => Lyrics.fromJson(data)).toList();
  }
}
