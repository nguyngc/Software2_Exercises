from car import Car
from random import randint

def print_car_list(cars):
    print("-" * 81)
    print(f"| No | Registration number | Maximum speed | Current speed | Travelled distance |")
    print("-" * 81)
    # Print each car's properties
    i = 1
    for car_item in cars:
        print(f"|{i:>3} | {car_item.registration_number:^20}|{car_item.maximum_speed:>9} km/h |{car_item.current_speed:>9} km/h |{car_item.travelled_distance:>16} km |")
        i += 1
    print("-" * 81)

def car_racing(cars):
    max_dist = 0
    time = 0
    while max_dist < 10000:
        time += 1
        for item in cars:
            item.accelerate(randint(-10, 15))
            item.drive(time)
            max_dist = max(item.travelled_distance, max_dist)
    return cars

car_list = []
for i in range(1, 11):
    new_car = Car(f"ABC-{i}", randint(100, 200))
    car_list.append(new_car)

print(f"""
{'*'*36}CAR RACE{'*'*36}
""")

print(f"{'Game Start':^81}")
print_car_list(car_list)
new_car_list = car_racing(car_list)
new_car_list.sort(key=lambda item: item.travelled_distance, reverse=True)
print(f"""
{'Final board':^81}""")
print_car_list(new_car_list)

