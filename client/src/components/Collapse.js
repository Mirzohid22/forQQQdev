import React, { useEffect } from 'react'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

export const Collapse = () => {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    }, [])

    return (
        <>
            <button data-target="modal1" class="btn modal-trigger" style={{margin: 10}}>Modal</button>


            <div id="modal1" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Quit</a>
                </div>
            </div>
        </>
    )
}