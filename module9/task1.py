from car import Car

car1 = Car('ABC-123', 142)

print(f"""
Registration number: {car1.registration_number}
Maximum speed: {car1.maximum_speed}km/h
Current speed: {car1.current_speed}km/h
Travelled distance: {car1.travelled_distance}km
""")