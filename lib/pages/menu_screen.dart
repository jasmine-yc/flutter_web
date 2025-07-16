import 'package:flutter/material.dart';
import 'package:first_app/brand/basic_text.dart';
import 'book_list_page.dart'; // 書單頁面
import 'lyrics_list_page.dart'; // 歌詞庫頁面

class MenuScreen extends StatelessWidget {
  const MenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: const Color.fromARGB(255, 255, 250, 238),
        appBar: AppBar(
          title: const BasicText(text: '書單和歌詞庫'),
          centerTitle: true,
          bottom: const TabBar(tabs: [Tab(text: '書單'), Tab(text: '歌詞庫')]),
          backgroundColor: const Color.fromARGB(255, 146, 170, 194),
          foregroundColor: const Color.fromARGB(255, 237, 232, 228),
          elevation: 0.0,
        ),
        body: const TabBarView(
          children: [
            BookListPage(), // 書單頁面
            LyricsLibraryPage(), // 歌詞庫頁面
          ],
        ),
      ),
    );
  }
}