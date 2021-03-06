from information.views import GenresApi
from django.conf.urls import url
from information.views import VoteView, GenreViewList


urlpatterns = [
    url(r'^genres/$', GenreViewList.as_view()),
    url(r'^vote/(?P<pk>\d+)/$', VoteView.as_view()),
    url(r'^genres/games/$', GenresApi.as_view())
]
