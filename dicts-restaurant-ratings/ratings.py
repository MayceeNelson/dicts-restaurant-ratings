"""Restaurant rating lister."""


def rating_lister(filename):
    restaurants = []
    file = open(filename)

    for restaurant in file:
        data = restaurant.rstrip().split(":")
        data_tuple = tuple(data)
        restaurants.append(data_tuple)
    file.close()
    
    return restaurants


def sorted_ratings():
    ratings = {}
    data = rating_lister("scores.txt")

    for restaurant in data:
        ratings[restaurant] = ratings.get(restaurant)
  
    # for item in ratings.items():
    #     print(item)
    return ratings


print(sorted(sorted_ratings()))

