import pytest
from game.models import Game


def game_creation(name="", url="", launch_year=0, game_version="1.3.4"):
    return Game(name=name, official_repository=url, game_version=game_version)


@pytest.fixture
def game_created():

    game = Game()
    game.name = 'mario'
    game.official_repository = 'https://github.com/PlataformaJogosUnb/'
    game.save()
    return game


class TestGame:

    @pytest.mark.django_db
    def test_create_game_with_valid_atributtes(self, game_created):
        game = Game.objects.get(pk=game_created.pk)
        assert game_created == game


class TestGameValidation:
    error_not_allowed_version = ""

    @pytest.mark.django_db
    @pytest.mark.parametrize("game, errors_dict", [
        ("", ""),
    ])
    def test_validations(self, game, errors_dict):
        # TODO: This test should be implemented
        assert True