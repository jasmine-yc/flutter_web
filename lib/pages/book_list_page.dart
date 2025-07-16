import 'package:flutter/material.dart';
import 'book_detail_page.dart'; // 書籍詳情頁面
import '../models/books.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';
import '../widgets/book_avatar.dart';


class BookListPage extends StatelessWidget {
  const BookListPage({super.key});

  Future<List<Book>> _loadBooks() async {
    final String jsonString = await rootBundle.loadString('assets/books.json');
    final List<dynamic> jsonData = json.decode(jsonString);
    return jsonData.map((item) => Book.fromJson(item)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 252, 251, 249),
      body: FutureBuilder<List<Book>>(
        future: _loadBooks(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('錯誤：${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('沒有書籍資料'));
          }

          final books = snapshot.data!;
          return ListView.builder(
            itemCount: books.length,
            itemBuilder: (context, index) {
              final book = books[index];
              return ListTile(
                leading: BookAvatar(imageUrl: book.imageUrl),
                title: Text(book.title, style: const TextStyle(fontSize: 18.0)),
                subtitle: Text('作者：${book.author}'),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => BookDetailPage(book: book),
                    ),
                  );
                },
              );
            },
          );
        },
      ),
    );
  }
}
