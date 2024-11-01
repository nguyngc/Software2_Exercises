class Publication:
    def __init__(self, name):
        self.name = name

    def print_information(self):
        print(self.name, end=" ")

class Book(Publication):
    def __init__(self, name, author, page_count):
        super().__init__(name)
        self.author = author
        self.page_count = page_count

    def print_information(self):
        super().print_information()
        print(f"is writen by {self.author}, {self.page_count} pages")


class Magazine(Publication):
    def __init__(self, name, chief_editor):
        super().__init__(name)
        self.chief_editor = chief_editor

    def print_information(self):
        super().print_information()
        print(f"is the magazine edited by {self.chief_editor}")

publications = []
publications.append(Magazine("Donald Duck", "Aki Hyyppä"))
publications.append(Book("Compartment No. 6", "Rosa Liksom", 192))

for p in publications:
    p.print_information()


