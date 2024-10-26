from car import Car

car1 = Car('ABC-123', 142, 60, 2000)

print(f"""
Registration number: {car1.registration_number}
Maximum speed: {car1.maximum_speed}km/h
Current speed: {car1.current_speed}km/h
Travelled distance: {car1.travelled_distance}km
""")

car1.drive(1.5)

print(f"Travelled distance: {car1.travelled_distance}km")

