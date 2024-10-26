from random import randint

from module10.race import Race
from module9.car import Car

cars = []
for i in range(10):
    cars.append(Car("ABC-" + str(i+1), randint(100, 200)))

race = Race("Grand Demolition Derby", 8000, cars)
t = 0
while not race.race_finished():
    race.hour_passed()
    t += 1
    if t%10 == 0:
        print(f"After {t} hours")
        race.print_status()

print(f"Final results, after {t} hours")
race.print_status()
