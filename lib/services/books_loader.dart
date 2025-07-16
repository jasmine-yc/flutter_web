import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/books.dart';

class BooksLoader {
  static Future<List<Book>> loadBooks() async {
    final String jsonString = await rootBundle.loadString('assets/books.json');
    final List<dynamic> jsonData = json.decode(jsonString);
    return jsonData.map((data) => Book.fromJson(data)).toList();
  }
}
