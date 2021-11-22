import React, { useEffect, useState } from "react";
import dicomParser  from "dicom-parser";
import cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader'

cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

cornerstoneWADOImageLoader.configure({
        beforeSend: function(xhr) {
        }
    });


export default function DcmViewer() {

        useEffect(() => {
            cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

            cornerstoneWADOImageLoader.configure({
            beforeSend: function(xhr) {
            }
        });


        function loadAndViewImage(imageId) {

            cornerstone.loadAndCacheImage(imageId).then(function(image){
                var viewport = cornerstone.getDefaultViewportForImage(element, image);

                cornerstone.displayImage(element, image, viewport);
            })
        }

        function downloadAndView() {
            let url = `http://localhost:8000/dicm/test/00a81e8f1051/bdc0bb04ae1e/ced40f593496.dcm`;

            url = "wadouri:" + url;

            console.log(url);

            loadAndViewImage(url);
        }
        
        var element = document.getElementById('dicomImage');
        cornerstone.enable(element);
        downloadAndView();      
        });
          
    return  <div>
                <br/>
                <div id="dicomImage" style={{height: '50vh', width: '50vh'}} ></div>
            </div>
  }