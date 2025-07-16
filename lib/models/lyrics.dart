class Lyrics {
  final String title;
  final String original;
  final String furigana;
  final String translation;

  Lyrics({
    required this.title,
    required this.original,
    required this.furigana,
    required this.translation,
  });

  factory Lyrics.fromJson(Map<String, dynamic> json) {
    return Lyrics(
      title: json['title'] as String,
      original: json['original'] as String,
      furigana: json['furigana'] as String,
      translation: json['translation'] as String,
    );
  }
}
