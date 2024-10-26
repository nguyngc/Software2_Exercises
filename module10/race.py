from random import randint
from module9.car import Car

class Race:
    def __init__(self, name, distance, cars):
        self.name = name
        self.distance = distance
        self.cars = cars

    def hour_passed(self):
        for car in self.cars:
            car.accelerate(randint(-10, 15))
            car.drive(1)

    def print_status(self):
        # prints out the current information of each car as a clear, formatted table
        print("-" * 81)
        print(f"| No | Registration number | Maximum speed | Current speed | Travelled distance |")
        print("-" * 81)
        i = 1
        for car in self.cars:
            print(
                f"|{i:>3} | {car.registration_number:^20}|{car.maximum_speed:>9} km/h |{car.current_speed:>9} km/h |{car.travelled_distance:>16} km |")
            i += 1
        print("-" * 81)

    def race_finished(self):
        for car in self.cars:
            if car.travelled_distance >= self.distance:
                return True
        return False
