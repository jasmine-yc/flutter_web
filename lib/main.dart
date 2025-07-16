import 'package:flutter/material.dart';
import 'package:first_app/pages/menu_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Booklist and Lyrics App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 192, 216, 239),
        ),
        useMaterial3: true,
      ),
      home: const MenuScreen(),
    );
  }
}
