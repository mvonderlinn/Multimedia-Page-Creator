describe('page-loaded-event-suit', function(){      var mockObj = {     state: 'unnotified',     onPageLoad: function() {        this.state = 'notified';     }        };      beforeEach(function() {      mockObj.state='unnotified';   });     it('is notifiing listerens',function(){    expect(mockObj.state).toBe('unnotified');            PageLoadedEvent.subscribe(mockObj);    PageLoadedEvent.trigger();        expect(mockObj.state).toBe('notified');  });    it('is unsubscribing listerens',function(){        expect(mockObj.state).toBe('unnotified');            PageLoadedEvent.unsubscribe(mockObj);    PageLoadedEvent.trigger();        expect(mockObj.state).toBe('unnotified');      });    });